import React, {Component} from 'react';
import {v1} from 'uuid';

import Todo from './Todo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            toDoList: [],
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    addItem(item){
        this.setState((st) => {
            return {toDoList: [...st.toDoList, {id: v1(), ...item}]}
        });
    }

    removeItem(itemId){
        this.setState((st) => {
            return {...st, toDoList: st.toDoList.filter((item) => item.id !== itemId)};
        });
    }

    updateTitle({id, title}) {
        this.setState((st) => {
            let newToDoList = st.toDoList.map((toDoItem) => {
                if(toDoItem.id === id){
                    return {
                        ...toDoItem,
                        title: title
                    }
                }
                else {
                    return toDoItem;
                }
            });

            return {...this.state, toDoList: newToDoList};
        });
    }

    render() {
        return (
            <div className='ToDoList'>
                {this.state.toDoList.map((item) => <Todo id={item.id} title={item.title} removeItem={this.removeItem} updateTitle={this.updateTitle} />)}
                <NewToDoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default ToDoList;