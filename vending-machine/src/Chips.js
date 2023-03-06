import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
    static routeName = '/chips';

    render() {
        return (
            <div className='Chips'>
                <h1>This is a bag of chips</h1>
                <Link to='/'>Return to vending machine</Link>
            </div>
        );
    }
}

export default Chips;