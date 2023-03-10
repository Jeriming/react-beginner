import React from "react";

/**
正确地使用 State
关于 setState() 你应该了解三件事：

1. 不要直接修改 State: 
// Wrong
this.state.comment = 'Hello';
需要使用this.setState({comment: 'Hello'});

2. State 的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
例如，此代码可能会无法更新计数器：
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;