import React, {Component} from 'react';
import axios from 'axios';

import './DadJokes.css';
import Joke from './Joke';

class DadJokes extends Component {
    constructor(props){
        super(props);

        this.state = {
            jokes: [],
            isLoading: true,
        }

        this.rate = this.rate.bind(this);
    }

    async componentDidMount() {
        let jokes = [];
        for(let count = 0; count < 10; count++){
            let response = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
            jokes.push({
                id: response.data.id,
                joke: response.data.joke,
                rating: 0,
            });
        }

        this.setState({jokes: jokes, isLoading: false});
    }

    rate(id, rating) {
        let newJokes = this.state.jokes.map((joke) => {
            if(joke.id === id){
                return {...joke, rating: joke.rating + rating};
            }
            else{
                return joke;
            }
        }).sort((j1, j2) => j1.rating < j2.rating);

        this.setState({jokes: newJokes});
    }

    render() {
        return (
            <div className='DadJokes'>
                <section className='DadJokes-Banner'>
                    <h1>DAD JOKES</h1>
                </section>
                <section className='DadJokes-Jokes'>
                    {this.state.isLoading && <p>Loading...</p>}
                    {this.state.jokes.map((joke) => <Joke key={joke.id} id={joke.id} joke={joke.joke} rating={joke.rating} rate={this.rate} />)}
                </section>
            </div>
        );
    }
}

export default DadJokes;