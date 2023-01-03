[返回首页](../README.md)

## 1. Hook基本概念

在 React 中，Hooks 就是把某个目标结果钩到某个可能会变化的数据源或者事件源上，那么当被钩到的数据或事件发生变化时，产生这个目标结果的代码会重新执行，产生更新后的结果。

一个执行过程（Execution），例如是函数组件本身，可以绑定在（钩在）传统意义的 State，或者 URL，甚至可以是窗口的大小。这样当 State、URL、窗口大小发生变化时，都会重新执行某个函数，产生更新后的结果。当然，既然我们的初衷是为了实现 UI 组件的渲染，那么在 React 中，其实所有的 Hooks 的最终结果都是导致 UI 的变化。但是正如 React 官方曾经提到过的，Hooks 的思想其实不仅可以用在 React，在其它一些场景也可以被利用。通过这样的思考，你应该能够理解 Hooks 诞生的来龙去脉了。比起 Class 组件，函数组件是更适合去表达 React 组件的执行的，因为它更符合 State => View 这样的一个逻辑关系。**但是因为缺少状态、生命周期等机制，让它一直功能受限。而现在有了 Hooks，函数组件的力量终于能真正发挥出来了**！不过这里有一点需要特别注意，Hooks 中被钩的对象，不仅可以是某个独立的数据源，也可以是另一个 Hook 执行的结果，这就带来了 Hooks 的最大好处：逻辑的复用。

更详细解释见官方文档： [引入Hook的动机](https://react.docschina.org/docs/hooks-intro.html#motivation)

## 2. Hook基础示例-useState

示例代码：[useStateTest.js](../src/lesson/lesson03/useStateTest.js)

在这里，useState 就是一个 Hook。通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

## 3. useEffect

React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。

[返回首页](../README.md)
