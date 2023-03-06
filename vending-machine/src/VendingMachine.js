import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Noodels from './Noodles';
import Chips from './Chips';
import Cola from './Cola';

class VendingMachine extends Component {
    static routeName = '/';

    render() {
        return (
            <div className='VendingMachine'>
                <h1>This is a vending machine</h1>
                <Link to={Noodels.routeName}>Get some Noodles</Link>
                <br />
                <Link to={Chips.routeName}>Get some Chips</Link>
                <br />
                <Link to={Cola.routeName}>Get some Cola</Link>
            </div>
        );
    }
}

export default VendingMachine;