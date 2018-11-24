import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     total : this.props.counterObj.value
    //  }

    //  handIncrement = () => {
    //      this.setState({total : this.state.total + 1})
    //  }

    render() { 
        let classess = 'badge m-2 badge-';
        classess += (this.props.counterObj.value) === 0 ? 'warning' : 'primary';
        
        return (
            <div>
                <span className={classess}>{this.formatCounter()}</span>
                
                <button onClick={() => this.props.onIncrement(this.props.counterObj)} 
                className='btn btn-defult m-2'>increment</button>

                <button onClick={() => this.props.onDelete(this.props.counterObj.id)} 
                className="btn btn-danger m-2">Delete</button>      
            </div>
        );
    }

    formatCounter (){
        const {value} = this.props.counterObj;
        //console.log(value);
        return value === 0 ? 'zero' : value;
    }
}
 
export default Counter;