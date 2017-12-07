import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dedline: 'December 25, 2017',
      newDedline: ''
    }
  }

  changeDEadline() {
    console.log('state', this.state);
    this.setState({
      dedline: this.state.newDedline
    });
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
          <input placeholder="new data" onChange={event => this.setState({newDedline: event.target.value})}/>
          <button onClick={() => this.changeDEadline()}>submit</button>
        </div>
      </div>
    )
  }
}

export default App;
