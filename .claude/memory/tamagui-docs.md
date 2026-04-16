---
name: tamagui-docs
description: Tamagui documentation URLs and API reference for quick lookup
type: reference
---

# Tamagui Documentation

## Documentation URLs
- Main docs: https://tamagui.dev/llms.txt
- Context7 library ID: /websites/tamagui_dev

## Key Components

### Sheet Component
Sheet is a modal/bottom sheet component.

**Snap Points**: Array of screen percentages (0-100) for sheet positions
```tsx
<Sheet snapPoints={[85, 50, 25]}> // 85%, 50%, 25% of screen height
```

**Key Props**:
- `open` / `onOpenChange` - controlled state
- `snapPoints` - array of screen percentages for snap positions
- `dismissOnSnapToBottom` - close when swiped to bottom
- `modal` - renders into app's root portal
- `position` / `onPositionChange` - controlled position index

**Sub-components**:
- `Sheet.Overlay` - backdrop behind sheet
- `Sheet.Handle` - drag handle for sheet
- `Sheet.Frame` - main content area
- `Sheet.ScrollView` - scrollable content

### Tamagui v2 Notes
- `ButtonText` not exported - use `Text` directly inside Button
- `Button` `color` prop removed - wrap text with `Text` and set color
- Use `variant` prop instead of `theme` for button variants
- Layout props (height, borderRadius, gap, etc.) should use `style={{}}` object
- `backgroundColor` in Tamagui components uses `background` token, not direct CSS

## Common Props Patterns
```tsx
// Stack-based components (XStack, YStack, ZStack)
<XStack style={{ height: 45, backgroundColor: '#F5F7FA', borderRadius: 12 }}>

// Button
<Button style={{ height: 44, backgroundColor: '#1566D1' }}>
  <Button.Text style={{ color: '#fff' }}>Text</Button.Text>
</Button>
```
