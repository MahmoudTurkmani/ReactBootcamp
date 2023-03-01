import React, {Component} from 'react';

import './Card.css';

class Card extends Component {
    // Implement Card
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='Card'>
                <img src={this.props.imgSrc} style={{rotate: `${this.props.rotation}deg`}} alt={this.props.alt} />
            </div>
        );
    }
}

export default Card;