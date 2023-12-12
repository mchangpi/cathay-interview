/** Can you explain the problem with the following code, and how to fix
it. **/
/* ANSWER */
/* 
The problem is about the function handleAddCount()
Becase of rendering algorithm, React batch the three setState() callings to a 
SINGLE setSate() calling.

To FIX it, modify the function handleAddCount(), 
by callinng setState() based on previous state
*/

import React from 'react';
import * as ReactDOM from 'react-dom';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    /* ORIGINAL setState() */
    /*
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    */

    /* FIX it by callinng setState() based on previous state */
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById('root'));

export default Count;
