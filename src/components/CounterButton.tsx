// @ts-nocheck
import React from "react";

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count ? true : false
  }

  updateCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;

// import React, { useState } from "react";

// const CounterButton = () => {
//   const [count, setCount] = useState(0)

//   return (
//       <button onClick={() => setCount(prevState => prevState + 1)}>
//         Count: {count}
//       </button>
//     );
// }

// export default CounterButton
