import React, {Component} from 'react';

import './Die.css';

class Die extends Component{
    static defaultProps = {
        num: 'three',
    };

    render(){
        return (
            <div className='Die'>
                <i className={`fas fa-8x fa-dice-${this.props.num}`}></i>
            </div>
        );
    }

}

export default Die;