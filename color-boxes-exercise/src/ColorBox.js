import React, { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        this.state = {
            red: red,
            blue: green,
            green: blue
        }
    }

    changeColor() {
        let newColors = {...this.state};
        newColors.red = Math.floor(Math.random() * 255);
        newColors.green = Math.floor(Math.random() * 255);
        newColors.blue = Math.floor(Math.random() * 255);
        this.setState(newColors);
    }

    render() {
        return (
            <div 
            className='ColorBox' 
            style={{backgroundColor: `rgb(${this.state.red}, ${this.state.blue}, ${this.state.green})`}}
            onClick={this.changeColor}    
            >

            </div>
        )
    }
}

export default ColorBox;