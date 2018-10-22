import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    countersObj: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handIncrement = counter => {
    const countersObj = [...this.state.countersObj];
    const index = countersObj.indexOf(counter);
    countersObj[index] = { ...counter };
    countersObj[index].value++;
    this.setState({ countersObj });
  };
  onDecrement = counter => {
    const countersObj = [...this.state.countersObj];
    const index = countersObj.indexOf(counter);
    countersObj[index] = { ...counter };
    countersObj[index].value--;
    if (countersObj[index].value >= 0) {
      this.setState({ countersObj });
    }
  };

  handelDelete = counerId => {
    const counersCons = this.state.countersObj.filter(c => c.id !== counerId);
    this.setState({ countersObj: counersCons });
  };

  resetHandeler = () => {
    const countersObj = this.state.countersObj.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ countersObj });
  };

  render() {
    return (
      <div>
        <Navbar
          totulCountersObj={
            this.state.countersObj.filter(c => c.value > 0).length
          }
        />
        <main>
          <Counters
            countersObj={this.state.countersObj}
            onReset={this.resetHandeler}
            onIncrement={this.handIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.handelDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
