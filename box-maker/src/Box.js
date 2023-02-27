import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.removeBox(this.props.id);
    }

    render() {
        return (
            <div className = 'Box'>
                <div style = {
                    {
                        display: 'inline-block',
                        height: `${this.props.height}px`,
                        width: `${this.props.width}px`,
                        backgroundColor: this.props.color,
                        borderRadius: '20px',
                    }
                }> </div>
                <br />
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        );
    }
}

export default Box;