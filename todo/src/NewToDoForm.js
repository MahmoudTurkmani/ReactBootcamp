import React, {Component} from 'react';

import './NewToDoForm.css';

class NewToDoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem({...this.state});
        this.setState({title: ''});
    }

    render(){
        return (
            <div className='NewToDoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className='NewToDoForm-input'
                        name='title'
                        type='text' 
                        onChange={this.handleChange} 
                        value={this.state.title}
                    />
                    <button type='submit' className='NewToDoForm-submit'>Add Item</button>
                </form>
            </div>
        );
    }
}

export default NewToDoForm;