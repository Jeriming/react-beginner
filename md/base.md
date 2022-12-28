[返回首页](../README.md)

## 基础入门demo

1. 熟悉JSX

官方定义，例如这段代码：
```javascript
const element = <h1>Hello, world!</h1>;
```
既不是字符串也不是 HTML，它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

示例代码：[Lesson01.js](../src/lesson/lesson01/Lesson01.js)

2. 元素渲染

元素是构成 React 应用的最小模块。
示例代码：[Lesson01.js](../src/lesson/lesson01/Lesson01.js)

3. 组件&Props

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。本指南旨在介绍组件的相关理念。

react的组件分为： 函数组件与 class 组件

定义组件最简单的方式就是编写 JavaScript 函数：
示例代码见：[FunctionComponent.js](../src/lesson/lesson01/FunctionComponent.js)

还有class组件：
示例代码：[ClassComponent.js](../src/lesson/lesson01/ClassComponent.js)

4. State & 生命周期

react 生命周期 :

- **挂载**
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- - constructor()
- - static getDerivedStateFromProps()
- - render()
- - componentDidMount()

- **更新**
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- - static getDerivedStateFromProps()
- - shouldComponentUpdate()
- - render()
- - getSnapshotBeforeUpdate()
- - componentDidUpdate()

- **卸载**
当组件从 DOM 中移除时会调用如下方法：

- - componentWillUnmount()

示例代码：[StateTest.js](../src/lesson/lesson02/StateTest.js)

5. 事件处理

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

6. 条件渲染
7. 列表&key
8. 状态提升
9. 组合 vs 继承

[返回](../README.md)