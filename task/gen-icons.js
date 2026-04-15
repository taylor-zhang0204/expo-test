/* eslint-disable */

const { execSync } = require('node:child_process');
const { readdirSync, mkdirSync, rmSync, readFileSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const iconsPath = path.resolve(__dirname, '../components/icons');
const assetsPath = path.resolve(iconsPath, 'assets');
const srcPath = path.resolve(iconsPath, 'src');

/**
 * Post-process generated component:
 * 1. Add BaseProps import and Pressable import
 * 2. Extract SVG elements used and build proper imports
 * 3. Replace component signature to use BaseProps
 * 4. Wrap with Pressable for onPress support
 */
const postProcessComponent = (content, componentName) => {
  // Remove xmlns attribute
  let processed = content.replace(/xmlns="[^"]*"/g, '');

  // Extract SVG elements used in the component
  const svgElements = [];
  const elementMatches = processed.matchAll(
    /<(G|Path|Defs|ClipPath|LinearGradient|Stop|Ellipse|Rect|Circle|Line|Polyline|Polygon|Use|Symbol|Image)(?:\s|[^>]*[^>])*>/g
  );
  const seenElements = new Set();
  for (const match of elementMatches) {
    const el = match[1];
    if (!seenElements.has(el)) {
      seenElements.add(el);
      svgElements.push(el);
    }
  }

  // Build imports
  const svgImportElements = svgElements.length > 0 ? `, { ${svgElements.join(', ')} }` : '';
  const imports = `import * as React from 'react';
import { Pressable } from 'react-native';
import Svg${svgImportElements} from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

`;

  // Find the Svg element content and extract viewBox
  const svgMatch = processed.match(/<Svg([^>]*)>/);
  const svgAttrs = svgMatch ? svgMatch[1] : '';

  // Remove width/height and {...props} from svgAttrs but keep viewBox and fill
  const cleanedSvgAttrs = svgAttrs
    .replace(/\s*width=\{[^}]*\}/g, '')
    .replace(/\s*height=\{[^}]*\}/g, '')
    .replace(/\s*\{\.\.\.props\}/g, '')
    .trim();

  // Find the inner content of Svg (everything between <Svg ...> and </Svg>)
  const svgContentMatch = processed.match(/<Svg[^>]*>([\s\S]*?)<\/Svg>/);
  const svgInnerContent = svgContentMatch ? svgContentMatch[1].trim() : '';

  // Build new component
  const newComponent = `${imports}const ${componentName} = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg ${cleanedSvgAttrs} width={size} height={size}>
        ${svgInnerContent}
      </Svg>
    </Pressable>
  );
};

export default ${componentName};
`;

  return newComponent;
};

/**
 * Generate native SVG components using @svgr/cli
 */
const generateComponents = async () => {
  // Clean up old src directory
  try {
    rmSync(srcPath, { recursive: true, force: true });
  } catch {}

  // Find all SVG files and track their directories
  const svgFiles = [];

  const findSvgs = (dir, relativePath = '') => {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findSvgs(fullPath, path.join(relativePath, entry.name));
      } else if (entry.name.endsWith('.svg')) {
        svgFiles.push({
          fullPath,
          relativePath,
          fileName: entry.name,
        });
      }
    }
  };

  findSvgs(assetsPath);

  // Track index files to create
  const indexFiles = new Map();

  for (const { fullPath, relativePath, fileName } of svgFiles) {
    // Create directory structure in src
    const outputDir = path.join(srcPath, relativePath);
    mkdirSync(outputDir, { recursive: true });

    // Convert kebab-case to PascalCase for component name
    const componentName = path
      .basename(fileName, '.svg')
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // Generate native component using svgr
    try {
      execSync(`npx @svgr/cli --native --typescript --icon -d ${outputDir} ${fullPath}`, {
        stdio: 'pipe',
      });
    } catch (err) {
      console.error(`Error generating component for ${fullPath}`);
      continue;
    }

    // Find and process the generated file
    const generatedFile = path.join(outputDir, `${componentName}.tsx`);

    if (require('fs').existsSync(generatedFile)) {
      const content = readFileSync(generatedFile, 'utf8');
      const processed = postProcessComponent(content, componentName);
      writeFileSync(generatedFile, processed);

      // Track for index file
      const dirKey = relativePath || '.';
      if (!indexFiles.has(dirKey)) {
        indexFiles.set(dirKey, []);
      }
      indexFiles.get(dirKey).push(componentName);

      console.log(`Generated: ${generatedFile}`);
    }
  }

  // Create index files
  for (const [dir, components] of indexFiles) {
    const indexPath = path.join(srcPath, dir, 'index.ts');
    const exports = components
      .sort()
      .map((c) => `export { default as ${c} } from './${c}';`)
      .join('\n');
    writeFileSync(indexPath, exports);
    console.log(`Created index: ${indexPath}`);
  }
};

generateComponents().then(() => {
  execSync('npx prettier --write "components/icons/src/**/*.tsx"');
  console.log('\nIcon generation complete!');
  console.log('Components location: components/icons/src/');
});
