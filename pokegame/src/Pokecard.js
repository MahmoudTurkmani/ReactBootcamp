import React, {Component} from 'react';
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

    render() {
        let {id, name, type, base_experience} = this.props;
        return (
            <article className='Pokecard'>
                <h1 className='Pokecard-title'>{name}</h1>
                <img src={this.getSDLink(id)} alt={name}/>
                <p>Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </article>
        )
    }
}

export default Pokecard;