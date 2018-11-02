import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    step: PropTypes.number
  };

  static defaultProps = {
    step: 1
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCounter() {
    const { step } = this.props;

    this.setState(({ count, ...state }) => ({
      ...state,
      count: count + step
    }));
  }

  decrementCounter() {
    const { step } = this.props;

    this.setState(({ count, ...state }) => ({
      ...state,
      count: count - step
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <button onClick={() => this.decrementCounter()}>-</button>
        <span>{count}</span>
        <button onClick={() => this.incrementCounter()}>+</button>
      </div>
    );
  }
}

export default Counter;
