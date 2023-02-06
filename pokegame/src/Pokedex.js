import React, {Component} from 'react';

import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    
    render() {
        const winStyle = {color: 'green'};
        const loseStyle = {color: 'red'};

        let pokedex = this.props.pokedex;
        return (
            <section className='Pokedex'>
                
                {this.props.win && <h1 style={winStyle}>Winning hand!</h1>}
                {!this.props.win && <h1 style={loseStyle}>Losing hand!</h1>}
                
                <h5>Total exp: {this.props.exp}</h5>
                
                <article className='Pokedex-tile-box'>
                {
                    pokedex.map((entry) => <Pokecard 
                    key={entry.id}
                    id={entry.id} 
                    name={entry.name}
                    type={entry.type}
                    base_experience={entry.base_experience}
                    className='Pokedex-tile'
                    />)
                }
                </article>
                
            </section>
        );
    }
}

export default Pokedex;