import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const Notion = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 20 20" width={size} height={size}>
        <G clipPath="url(#notion_svg__a)">
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="m3.573 18.261-2.15-2.678a3.6 3.6 0 0 1-.798-2.252V3.634c0-1.221.977-2.235 2.238-2.32l9.97-.681a3.25 3.25 0 0 1 2.039.545l3.503 2.368c.627.424 1 1.117 1 1.857v11.024c0 1.195-.96 2.185-2.195 2.261l-11.065.681a3.02 3.02 0 0 1-2.543-1.108"
            clipRule="evenodd"
          />
          <Path
            fill="#000"
            d="M7.03 8.487V8.36c0-.322.258-.589.59-.611l2.42-.162 3.346 4.928V8.19l-.862-.115v-.06c0-.326.264-.594.6-.612l2.202-.112v.316a.31.31 0 0 1-.262.302l-.53.09v7.003l-.665.229a1.29 1.29 0 0 1-1.492-.493L9.13 9.836v4.678l1 .192-.014.092a.626.626 0 0 1-.598.524l-2.487.11a.576.576 0 0 1 .524-.625l.327-.034V8.534z"
          />
          <Path
            fill="#000"
            fillRule="evenodd"
            d="m12.922 1.854-9.97.68c-.597.042-1.06.522-1.06 1.1v9.697c0 .544.187 1.072.532 1.502l2.15 2.677c.347.433.894.672 1.46.637l11.065-.681c.567-.035 1.009-.49 1.009-1.04V5.404c0-.34-.172-.659-.46-.853L14.145 2.18a1.95 1.95 0 0 0-1.223-.327M3.447 3.786c-.14-.103-.073-.317.101-.33l9.44-.677c.302-.021.6.062.844.234l1.894 1.342c.072.051.038.161-.05.166l-9.999.544a1.3 1.3 0 0 1-.841-.251zm1.761 2.983c0-.325.263-.593.598-.611l10.57-.576a.56.56 0 0 1 .603.55v9.546a.62.62 0 0 1-.596.611l-10.504.598a.625.625 0 0 1-.67-.611z"
            clipRule="evenodd"
          />
        </G>
        <Defs>
          <ClipPath id="notion_svg__a">
            <Path fill="#fff" d="M0 0h20v20H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default Notion;
