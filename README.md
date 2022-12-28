## React从零开始

本文致力于打造从零开始深入学习react、react router 、state、hooks、 redux等

## 1. 基础入门demo

1. 熟悉JSX

官方定义，例如这段代码：
```javascript
const element = <h1>Hello, world!</h1>;
```
既不是字符串也不是 HTML，它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

文件见：[Lesson01.js](./src/lesson/lesson01/Lesson01.js)

2. 元素渲染

元素是构成 React 应用的最小模块。
文件见：[Lesson01.js](./src/lesson/lesson01/Lesson01.js)

3. 组件&Props

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。本指南旨在介绍组件的相关理念。

react的组件分为： 函数组件与 class 组件

定义组件最简单的方式就是编写 JavaScript 函数：
文件见：[FunctionComponent.js](./src/lesson/lesson01/FunctionComponent.js)

还有class组件：
文件见：[ClassComponent.js](./src/lesson/lesson01/ClassComponent.js)

4. State & 声明周期
5. 事件处理
6. 条件渲染
7. 列表&key
8. 状态提升
9. 组合 vs 继承