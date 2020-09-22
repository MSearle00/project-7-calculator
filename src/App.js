import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad.js';
import Result from './components/Result.js';
import Memory from './components/Memory.js';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: "",
          memory: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }
      
      else if(button === "m+"){
          this.setState({
              memory: Number(this.state.memory) + Number(this.state.result)
          })
          this.reset()
      }
      
      else if(button === "m-"){
          this.setState({
              memory: Number(this.state.memory) - Number(this.state.result)
          })
          this.reset()
      }

      else if(button === "MC"){
          this.setState({
              memory: ""
          })
      }

      else if(button === "MR"){
          this.setState({
              result: this.state.result + this.state.memory
          })
          
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      }

      else {
          checkResult = this.state.result
      }

      try {
          this.setState({
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
  return (
    <>
    <h1>Calculator App</h1>
    <div className="App">
      <div className="page-wrap">
            <div className="calc-wrap">
                <Result result={this.state.result}/>
                <Keypad onClick={this.onClick}/> 
            </div>
        <Memory memory={this.state.memory} />
      </div>
    
    </div>
    </>
  );
}
}
export default App;
