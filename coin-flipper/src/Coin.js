import React, {Component} from 'react';

class Coin extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='Coin'>
                <img src={this.props.image} alt='Image of a coin' />
            </div>
        )
    }
}

export default Coin;