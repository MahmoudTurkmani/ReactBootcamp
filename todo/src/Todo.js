import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            isEditing: false,
            isCompleted: false,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleDelete(){
        this.props.removeItem(this.props.id);
    }

    handleEdit(){
        this.setState({isEditing: true});
    }

    handleChange(evt) {
        this.setState((st) => {
            return {...st, title: evt.target.value};
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateTitle({id: this.props.id, title: this.state.title});
        this.setState({isEditing: false});
    }

    handleComplete(){
        this.setState({isCompleted: !this.state.isCompleted});
    }

    render(){
        let editItem = (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.title} onChange={this.handleChange} />
                <button type='submit'>✔️</button>
            </form>
        );

        let viewItem = (
            <div>
                <span onClick={this.handleComplete}>
                    {this.state.isCompleted ? <s>{this.props.title}</s> : this.props.title}
                </span>
                <button onClick={this.handleEdit}>✏️</button>
                <button onClick={this.handleDelete}>🗑️</button>
            </div>
        );

        return (
            <div className='Todo'>
                {this.state.isEditing ? editItem : viewItem}
            </div>
        );
    }
}

export default Todo;