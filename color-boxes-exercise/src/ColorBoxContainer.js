import React, { Component } from 'react';
import ColorBox from './ColorBox';

import './ColorBoxContainer.css';

class ColorBoxContainer extends Component {
    static defaultProps = {
        boxNum: 12,
    }
    
    render() {
        let items = [];
        for(let i = 0; i < this.props.boxNum; i++){
            items.push(<ColorBox />);
        }
        
        return (
            <div className='ColorBoxContainer'>
                {items}
            </div>
        )
    }
}

export default ColorBoxContainer;