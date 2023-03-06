import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Noodels extends Component {
    static routeName = '/noodles';

    render() {
        return (
            <div className='Noodels'>
                <h1>This is the noodles page!</h1>
                <Link to='/'>Return to vending machine</Link>
            </div>
        );
    }
}

export default Noodels;