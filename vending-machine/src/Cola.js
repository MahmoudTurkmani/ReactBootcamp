import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Cola extends Component {
    static routeName = '/cola';

    render() {
        return (
            <div className='Cola'>
                <h1>This is a can of cola!</h1>
                <Link to='/'>Return to vending machine</Link>
            </div>
        );
    }
}

export default Cola;