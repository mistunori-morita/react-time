import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dedline: 'December 25, 2017'
    }
  }

  render(){
    return (
      <div className="App">
        <div>CountDown to {this.state.dedline}</div>
        <div className="App-title">
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;
