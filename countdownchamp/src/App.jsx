import React, { Component }from 'react';
import './App.css';
import Clock from './Clock';

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
        <Clock
          dedline={this.state.dedline}/>
        <div>
          <input placeholder="new data" onChange={event => this.setState({newDedline: event.target.value})}/>
          <button onClick={() => this.changeDEadline()}>submit</button>
        </div>
      </div>
    )
  }
}

export default App;
