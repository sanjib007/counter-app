import React, { Component } from 'react';
import Counter from './couner';

class Counters extends Component {
    render() { 
        return (  
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.countersObj.map( 
                    counterObj => (
                        <Counter key={counterObj.id} 
                        onDelete={this.props.onDelete} 
                        onIncrement = {this.props.onIncrement}
                        counterObj={counterObj}></Counter>
                    )              
                )}
            </div>
        );
    }
}
 
export default Counters;