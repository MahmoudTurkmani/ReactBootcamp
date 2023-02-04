import React, {Component} from 'react';

import fire from './assets/fire.png';
import water from './assets/water.png';
import bug from './assets/bug.png';
import flying from './assets/flying.png';
import electric from './assets/electric.png';
import normal from './assets/normal.png';
import poison from './assets/poison.png';
import exp from './assets/exp.png';
import './Pokecard.css'

class Pokecard extends Component {
    getHDLink(id){
        let num;
        if(id < 10) {
            num = `00${id}`;
        } else if(id < 100) {
            num = `0${id}`;
        } else {
            num = id;
        }
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
    }

    getSDLink(id){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    getTypeIcon(type){
        switch(type){
            case 'fire':
                return fire;
            case 'water':
                return water;
            case 'flying':
                return flying;
            case 'electric':
                return electric;
            case 'normal':
                return normal;
            case 'poison':
                return poison;
            default:
                return bug;
        }
    }

    render() {
        let {id, name, type, base_experience} = this.props;
        return (
            <article className='Pokecard'>
                <h1 className='Pokecard-title'>{name}</h1>
                <img className='Pokecard-image' src={this.getHDLink(id)} alt={name}/>
                <section className='Pokecard-info'>
                    <img className='Pokecard-type-icon' src={this.getTypeIcon(type)} alt={type}/>
                    <div className='Pokecard-info'>
                        <img className='Pokecard-type-icon' src={exp} alt='exp-icon' />
                        <span> {base_experience}</span> 
                    </div>
                </section>
            </article>
        )
    }
}

export default Pokecard;