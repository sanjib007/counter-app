import React, { Component } from 'react';
import Counter from './couner';

class Counters extends Component {
    state = {  
        countersObj : [
            {id : 1, value : 5},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
    }
    handIncrement = counter => {
        const countersObj = [...this.state.countersObj];
        const index = countersObj.indexOf(counter);
        countersObj[index] = {...counter};
        countersObj[index].value++;
        this.setState({countersObj});
        
    }

    handelDelete = counerId => {
        const counersCons = this.state.countersObj.filter(c => c.id !== counerId);
        this.setState({countersObj : counersCons });
    }

    resetHandeler = () => {
        const countersObj = this.state.countersObj.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({countersObj});
    }

    render() { 
        return (  
            <div>
                <button onClick={this.resetHandeler} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.countersObj.map( 
                    counterObj => (
                        <Counter key={counterObj.id} 
                        onDelete={this.handelDelete} 
                        onIncrement = {this.handIncrement}
                        counterObj={counterObj}></Counter>
                    )              
                )}
            </div>
        );
    }
}
 
export default Counters;