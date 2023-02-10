/*
*  State clicker exercise
*  Video no. 50
*/

import React, { Component } from 'react';

class Rando extends Component {
  constructor(props){
    super(props);
    this.state = {num: 0, win: false};
    this.clickHandler = this.clickHandler.bind(this);
  }

  static defaultProps = {
    maxNum: 10,
    targetNum: 5
  };


  clickHandler(e) {
    let newNum = Math.floor(Math.random() * this.props.maxNum);
    console.log(newNum == this.props.targetNum);
    this.setState({num: newNum, win: (newNum == this.props.targetNum)});
  }

  render(props){
    return (
      <div className='Rando'>
        {!this.state.win ? <h1>The number you rolled is: {this.state.num}</h1> : <h1>YOU WIN!!!!!</h1>}
        {!this.state.win ? <button onClick={this.clickHandler}>Press me please! </button> : null}
      </div>    
    )
  }
}

export default Rando;
