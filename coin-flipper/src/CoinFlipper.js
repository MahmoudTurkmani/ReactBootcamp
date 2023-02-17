import React, { Component } from 'react';

import heads from './assets/heads.png';
import tails from './assets/tails.png';
import Coin from './Coin';

class CoinFlipper extends Component {
    static values = {
        'heads': heads,
        'tails': tails,
    };

    constructor(props) {
        super(props);
        this.state = {
            'heads': 0,
            'tails': 0,
            'count': 0,
            'choice': heads,
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let index = Math.ceil(Math.random() * 2) - 1;
        let coinKey = index === 0 ? 'heads' : 'tails';
        let choice = coinKey === 'heads' ? heads : tails;
        
        this.setState((oldState) => {
            let newHeads = oldState.heads;
            let newTails = oldState.tails;
            
            if(coinKey === 'heads') {
                newHeads += 1;
            }
            else {
                newTails += 1;
            }

            return {
                'choice': choice, 
                'count': oldState.count + 1,
                'heads': newHeads,
                'tails': newTails,
            }; 
        });
    }

    render() {
        return (
            <div className='CoinFlipper'>
                <Coin image={this.state.choice} />
                <button onClick={this.flipCoin}> Flip coin </button>
                <h2>You flipped the coin {this.state.count} times. Out of those, {this.state.heads} were heads and {this.state.tails} were tails.</h2>
            </div>
        );
    }
}

export default CoinFlipper;