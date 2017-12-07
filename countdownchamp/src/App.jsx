import React, { Component }from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div>CountDown to December 25, 2017</div>
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
