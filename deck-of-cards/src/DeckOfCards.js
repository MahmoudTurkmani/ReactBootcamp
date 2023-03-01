import React, {Component} from 'react';
import axios from 'axios';
import {v1} from 'uuid';

import './DeckOfCards.css';
import Card from './Card';

class DeckOfCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            isLoading: true,
            deckId: '',
            remainingCards: 0,
        }

        this.drawCard = this.drawCard.bind(this);
    }

    async componentDidMount(){
        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle';
        let resp = await axios.get(url);
        this.setState({
            deckId: resp.data.deck_id,
            remainingCards: resp.data.remaining,
            isLoading: false,
        });
    }

    async drawCard(){
        this.setState({isLoading: true}, async () => {
            const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
            let resp = await axios.get(url);
            this.setState((st) => {
                return {
                    ...st,
                    remainingCards: resp.data.remaining,
                    cards: [
                        ...st.cards, {
                        key: v1(),
                        imgSrc: resp.data.cards[0].image, 
                        rotation: Math.ceil(Math.random() * 360),
                        description: `${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`
                    }],
                    isLoading: false,
                }
            });
        });

        if(this.state.remainingCards === 0) {
            alert('You have pulled all the cards in the deck!');
        }
    }

    render() {
        return (
            <div className='DeckOfCards'>
                <button  onClick={this.drawCard} disabled={this.state.isLoading || this.state.remainingCards <= 0}>Draw a card</button>
                {this.state.cards.map((card) => <Card key={card.key} imgSrc={card.imgSrc} rotation={card.rotation} alt={card.description} />)}
            </div>
        );
    }
}

export default DeckOfCards;