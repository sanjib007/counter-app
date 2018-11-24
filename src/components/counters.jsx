import React, { Component } from 'react';
import Counter from './couner';

class Counters extends Component {
  render() {
    const {
      onReset,
      countersObj,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {countersObj.map(counterObj => (
          <Counter
            key={counterObj.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counterObj={counterObj}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;