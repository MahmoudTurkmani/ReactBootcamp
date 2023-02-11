import React, {Component} from 'react';

import Die from './Die.js';
import './RollDice.css';

class RollDice extends Component {
    
    static combinations = ['one', 'two', 'three', 'four', 'five', 'six'];

    constructor(props){
        super(props);
        this.state = {
            num1: 'one',
            num2: 'two',
            isPlaying: false,
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        let newNum1 = RollDice.combinations[Math.ceil(Math.random() * 6)];
        let newNum2 = RollDice.combinations[Math.ceil(Math.random() * 6)];
        this.setState({num1: newNum1, num2: newNum2, isPlaying: true}, () => {
            setTimeout(() => {
                this.setState({isPlaying: false});
            }, 500);
        });
    }

    render() {
        return (
            <div className='RollDice'>
                <h1>Dice Roller Exercise!</h1>
                <div className={`RollDice-DieContainer ${this.state.isPlaying ? 'RollDice-RollingDie' : ''}`}>
                    <Die num={this.state.num1} />
                    <Die num={this.state.num2} />
                </div>
                <button 
                className='RollDice-Button' 
                onClick={this.roll}
                disabled={this.state.isPlaying}
                >
                  {this.state.isPlaying ? 'Rolling...' : 'Re-roll' }
                </button>
            </div>
        );
    }
}

export default RollDice;