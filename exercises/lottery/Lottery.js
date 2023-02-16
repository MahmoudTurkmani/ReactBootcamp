import React, { Component } from 'react';

import Ball from './Ball.js';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        'title': 'Lotto',
        'numBalls': 6,
        'maxNum': 40
    };

    constructor(props) {
        super(props);
        
        // Running for initial values
        let newNums = [];
        for(let x = 0; x < this.props.numBalls; x++){
            newNums.push(Math.floor(Math.random() * this.props.maxNum));
        }
        
        // Setting the state
        this.state = {
            'nums': newNums
        };
        
        this.rollNums = this.rollNums.bind(this);
    }

    rollNums() {
        let newNums = [];
        for(let x = 0; x < this.props.numBalls; x++){
            newNums.push(Math.floor(Math.random() * this.props.maxNum));
        }
        this.setState({'nums': newNums});
    }

    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((num) => <Ball num={num} />)}
                </div>
                <button onClick={this.rollNums}>Roll Numbers</button>
            </div>
        );
    }
}

export default Lottery;