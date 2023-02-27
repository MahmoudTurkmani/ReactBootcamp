import React, { Component } from 'react';
import {v1} from 'uuid';

import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            boxList: []
        };

        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        this.setState((st) => {
            return {boxList: [...st.boxList, {...box, id: v1()}]};
        });
    }

    removeBox(boxId){
        this.setState((st) => {
            return {boxList: st.boxList.filter((box) => box.id !== boxId)}
        });
    }

    render(){
        return (
            <section className='BoxList'>
                <h1>Box Maker</h1>
                <NewBoxForm addBox={this.addBox} />
                {this.state.boxList.map((box) => 
                    <Box key={box.id} id={box.id} height={box.height} width={box.width} color={box.color} removeBox={this.removeBox} />
                )}
            </section>
        );
    }
}

export default BoxList;