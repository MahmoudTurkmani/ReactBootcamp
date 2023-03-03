import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './Joke.css';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(){
        this.props.rate(this.props.id, 1);
    }

    handleDownvote(){
        this.props.rate(this.props.id, -1);
    }

    render() {
        return (
            <div className='Joke'>
                <article className='Joke-Container'>
                    <div className='Joke-Rating'>
                        <FontAwesomeIcon onClick={this.handleUpvote} icon={faArrowUp} />
                        <span>{this.props.rating}</span>
                        <FontAwesomeIcon onClick={this.handleDownvote} icon={faArrowDown} />
                    </div>
                    <div className='Joke-Content'>
                        <p>{this.props.joke}</p>
                    </div>
                </article>
                <hr />
            </div>
        );
    }
}

export default Joke;