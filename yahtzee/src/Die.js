import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  constructor(props){
    super(props);
    this.lockDie = this.lockDie.bind(this);
  }

  lockDie(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    let icon = 'fas fa-dice-one fa-2xl';
    switch(this.props.val){
      case 2:
        icon = 'fas fa-dice-two fa-2xl';
        break;
      case 3:
        icon = 'fas fa-dice-three fa-2xl';
        break;
      case 4:
        icon = 'fas fa-dice-four fa-2xl';
        break;
      case 5:
        icon = 'fas fa-dice-five fa-2xl';
        break;
      case 6:
        icon = 'fas fa-dice-six fa-2xl';
        break;
      default:
        icon = 'fas fa-dice-one fa-2xl';
    }

    const locked = this.props.locked ? 'Die-locked' : '';
    const isRolling = this.props.isRolling ? 'Die-rolling' : '';

    return (
      <div
        className={`Die ${icon} ${locked} ${isRolling}`}
        onClick={this.lockDie}
      >
      </div>
    );
  }
}

export default Die;
