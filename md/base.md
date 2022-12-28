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

示例代码：[ProcessEvent.js](../src/lesson/lesson02/ProcessEvent.js)

6. 条件渲染

在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。

可通过类似js代码一样的几种方式实现条件渲染：
元素变量、与运算符 &&、三目运算符，很简单，代码就不示例了。

7. 列表&key

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key

key 只是在兄弟节点之间必须唯一，但不需要是全局唯一

8. 状态提升

通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。

示例代码：[StatusPromotion.js](../src/lesson/lesson02/StatusPromotion.js)

9. 组合 vs 继承

React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。

在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。

Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

[返回](../README.md)