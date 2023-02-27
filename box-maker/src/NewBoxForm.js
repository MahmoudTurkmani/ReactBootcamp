import React, {Component} from 'react';

class NewBoxForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            key: '',
            height: '',
            width: '',
            color: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState((st) => {
            return {...st, [evt.target.name]: evt.target.value};
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox({...this.state});
        this.setState({height: '', width: '', color: ''});
    }

    render(){
        return (
            <section className='NewBoxForm'>
                <form onSubmit={this.handleSubmit}>
                    {/* Height input */}
                    <label htmlFor='height'>Height: </label>
                    <input id='height' name='height' type='number' value={this.state.height} onChange={this.handleChange} min={0} />
                    {/* Width input */}
                    <label htmlFor='width'>width: </label>
                    <input id='width' name='width' type='number' value={this.state.width} onChange={this.handleChange} min={0} />
                    {/* Color input */}
                    <label htmlFor='color'>Color: </label>
                    <input id='color' name='color' onChange={this.handleChange} value={this.state.color} type='text' />
                    {/* Add/Submit button */}
                    <button type='submit'>Add Box</button>
                </form>
            </section>
        );
    }
}

export default NewBoxForm;