# Expo 项目学习指南

## 项目技术栈

本项目基于 **Expo SDK 54** + **React Native 0.81** + **Expo Router 6**：

```json
{
  "expo": "~54.0.33",
  "react-native": "0.81.5",
  "expo-router": "~6.0.23",
  "react-native-reanimated": "~4.1.1",
  "@react-navigation/native": "^7.1.8"
}
```

### 已安装的依赖

| 类别 | 依赖 | 用途 |
|------|------|------|
| 路由 | expo-router | 文件系统路由 |
| 导航 | React Navigation 7 | 导航解决方案 |
| 动画 | react-native-reanimated 4 | UI 线程动画 |
| 手势 | react-native-gesture-handler | 手势处理 |
| 图片 | expo-image | 高性能图片 |
| 图标 | @expo/vector-icons | 系统图标 |
| 触感 | expo-haptics | 触感反馈 |
| 字体 | expo-font | 自定义字体 |
| 启动屏 | expo-splash-screen | 启动屏控制 |
| 状态栏 | expo-status-bar | 状态栏控制 |

### 跨平台支持

- iOS ✅
- Android ✅
- Web ✅

---

## 学习路径

### 1. Expo Router（文件系统路由）

**核心概念**：目录即路由，`app/` 下的文件自动映射为页面。

```
app/
├── _layout.tsx         # 根布局
├── index.tsx          # / 首页
├── (tabs)/
│   ├── _layout.tsx    # Tab 布局
│   ├── home.tsx       # /home
│   └── settings.tsx   # /settings
└── detail/[id].tsx    # 动态路由 /detail/:id
```

**学习重点**：
- Stack / Tabs / Drawer 布局组件
- 路由组 `(group)` 的用法
- 动态路由和搜索参数
-  Imperative 导航 `useRouter` / `router.push()`

### 2. React Native Reanimated 4 + Worklets

**核心概念**：动画函数运行在 UI 线程，通过 Worklets 实现高性能。

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

// Worklet 规则：
// - 不能直接调用外部函数
// - 需要用 runOnJS() 调用 React 函数
// - 动画值必须在 worklet 内修改
```

**关键概念**：
- `useSharedValue` - 动画状态
- `useAnimatedStyle` - 动画样式
- `worklet` - UI 线程函数
- `runOnJS` - 从 worklet 调用 React 函数

### 3. Expo SDK 模块

Expo 提供了大量原生模块，按需使用：

| 模块 | 用途 |
|------|------|
| `expo-camera` | 相机 |
| `expo-location` | 定位 |
| `expo-notifications` | 推送通知 |
| `expo-secure-store` | 安全存储 |
| `expo-file-system` | 文件操作 |
| `expo-av` | 音视频 |
| `expo-blur` | 模糊效果 |
| `expo-sensors` | 陀螺仪/加速度计 |
| `expo-contacts` | 联系人 |

### 4. EAS Build 发布流程

生产环境不再需要 Xcode/Android Studio，直接云构建：

```bash
eas build --platform ios     # iOS
eas build --platform android # Android
eas submit --platform ios   # 提交 App Store
```

---

## 学习文档链接

### Expo Router

| 文档 | 链接 |
|------|------|
| 官方介绍 | https://docs.expo.dev/router/introduction |
| Stack 导航入门 | https://docs.expo.dev/router/advanced/stack |
| 路由 API 参考 | https://docs.expo.dev/versions/latest/sdk/router/index |
| 教程集合 | https://docs.expo.dev/guides/overview |

### React Native Reanimated 4 + Worklets

| 文档 | 链接 |
|------|------|
| 官方安装指南 | https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started |
| Worklets 插件配置 | https://docs.swmansion.com/react-native-reanimated/docs/reanimated-babel-plugin/about |
| 从 3.x 迁移到 4.x | https://docs.swmansion.com/react-native-reanimated/docs/guides/migration-from-3.x |

**Babel 配置变化（Reanimated 4.x 必读）**：

```js
// babel.config.js
plugins: [
-  'react-native-reanimated/plugin',
+  'react-native-worklets/plugin',
]
```

### Expo SDK 模块

| 文档 | 链接 |
|------|------|
| SDK v55 参考 | https://docs.expo.dev/versions/v55.0.0 |
| SDK 模块总览 | https://docs.expo.dev/versions/latest |
| 核心模块使用示例 | https://docs.expo.dev/versions/v55.0.0/sdk/camera |

### EAS Build 发布

| 文档 | 链接 |
|------|------|
| EAS Build 概览 | https://docs.expo.dev/build/introduction |
| 快速开始 | https://docs.expo.dev/build/setup |

### 在线实验

- **Expo Sandpack**: https://snack.expo.dev — 无需本地环境，在线编写 Expo 代码

---

## 学习优先级

| 优先级 | 内容 | 预计时间 |
|--------|------|----------|
| ⭐⭐⭐ | Expo Router 路由系统 | 1-2 天 |
| ⭐⭐⭐ | Reanimated 4 Worklets | 2-3 天 |
| ⭐⭐ | EAS Build 发布流程 | 1 天 |
| ⭐⭐ | Expo SDK 模块生态 | 持续 |
| ⭐ | 新架构细节 (RN 0.81) | 了解即可 |

---

## 快速上手步骤

```bash
# 1. 启动开发服务器
npm start

# 2. 运行 iOS 模拟器
npm run ios

# 3. 运行 Android
npm run android

# 4. 运行 Web
npm run web
```

```tsx
// 第一个页面: app/index.tsx
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => router.push('/detail/1')}>Go to Detail</Text>
    </View>
  );
}
```
