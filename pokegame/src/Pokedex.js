import React, {Component} from 'react';

import Pokecard from './Pokecard';

import './Pokedex.css';

class Pokedex extends Component{
    static pokedex = [ 
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ];
    
    render() {
        return (
            <section className='Pokedex'>
                <h1 className='Pokedex-title'>Pokedex</h1>
                <article className='Pokedex-tile-box'>
                {
                    Pokedex.pokedex.map((entry) => <Pokecard 
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