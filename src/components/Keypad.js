import React, {Component} from 'react';
import './Button.scss';

class Keypad extends Component{

render() {
    return (
<div classsName ="button">
          <div className="row">
            <button class="operator" name="m+" onClick={e => this.props.onClick(e.target.name)}>m+</button>
            <button class="operator" name="m-" onClick={e => this.props.onClick(e.target.name)} >m-</button>
            <button class="operator" name="MC" onClick={e => this.props.onClick(e.target.name)}>MC</button>
            <button class="operator" name="MR" onClick={e => this.props.onClick(e.target.name)}>MR</button>
          </div>
          <div className="row">
            <button class="operator" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button class="operator" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button class="operator" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <button class="operator" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
          </div>
          <div className="row">
            <button class="button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button class="button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button class="button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button class="operator" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
          </div>
          <div className="row">
            <button class="button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button class="button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button class="button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button class="operator" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
          </div>
          <div className="row">
            <button class="button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button class="button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button class="button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button class="operator" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
          </div>
          <div className="row">
            <button class="button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button class="button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button class="operator" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button class="operator" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
          </div>
        </div>
        );
    }
}

export default Keypad;
