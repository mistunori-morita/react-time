import React, { Component }from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


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
        <Form inline={true}>
          <FormControl
             className="Deadline-input"
             placeholder="new data"
             onChange={event => this.setState({newDedline: event.target.value})}/>
          <Button onClick={() => this.changeDEadline()}>submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
