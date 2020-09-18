import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
  return (
    <>
    <h1>Calculator App</h1>
    <div className="App">
      <div className="calc-wrap">
        <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button>m+</Button>
            <Button>m-</Button>
            <Button>MC</Button>
            <Button>MR</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
        <div className="row">
        <ClearButton> Clear </ClearButton>
        </div>
      </div>
    
    </div>
    </>
  );
}
}
export default App;
