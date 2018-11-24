import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

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
      <React.Fragment>
        <Navbar/>
        <Counters 
        countersObj={this.state.countersObj}
        onReset={this.resetHandeler} 
        onIncrement={this.handIncrement} 
        onDelete={this.handelDelete} />
      </React.Fragment>
    );
  }
}

export default App;
