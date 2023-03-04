import React, {Component} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';

import './DadJokes.css';
import Joke from './Joke';

class DadJokes extends Component {
    static APIUrl = 'https://icanhazdadjoke.com/';
    static localStorageKey = '';

    constructor(props){
        super(props);

        this.state = {
            jokes: [],
            isLoading: true,
        }

        this.rate = this.rate.bind(this);
        this.retrieveJokesFromInternet = this.retrieveJokesFromInternet.bind(this);
        this.retrieveJokesFromLocalStorage = this.retrieveJokesFromLocalStorage.bind(this);
    }

    /**
     * Retrieves the jokes
     */
    async componentDidMount() {
        if(this.jokesInStorage()){
            this.retrieveJokesFromLocalStorage();
        }
        else {
            await this.retrieveJokesFromInternet();
        }
    }
    
    /**
     * Retrieves Jokes from local Storage
     */
    retrieveJokesFromLocalStorage(){
        let jokes = [];
        jokes = JSON.parse(localStorage.getItem(DadJokes.localStorageKey));

        this.setState({jokes: jokes, isLoading: false});
    }

    /**
     * Gets the jokes from the internet using axios
     */
    async retrieveJokesFromInternet(){
        this.setState({isLoading: true, jokes: []});

        let jokes = [];
        for(let count = 0; count < 10; count++){
            let response = await axios.get(DadJokes.APIUrl, {headers: {Accept: 'application/json'}});
            jokes.push({
                id: response.data.id,
                joke: response.data.joke,
                rating: 0,
            });
        }
    
        this.setState({jokes: jokes, isLoading: false}, () => this.storeJokes());
    }

    /**
     * Stores the Jokes into localStorage
     */
    storeJokes(){
        localStorage.setItem(DadJokes.localStorageKey, JSON.stringify(this.state.jokes));
    }

    /**
     * Checks the local storage to see if
     * there are jokes stored in the system
     */
    jokesInStorage() {
        return localStorage.getItem(DadJokes.localStorageKey) === null ? false : true;
    }

    /**
     * Changes the rating of a joke
     * and then sorts them based on rating
     */
    rate(id, rating) {
        let newJokes = this.state.jokes.map((joke) => {
            if(joke.id === id){
                return {...joke, rating: joke.rating + rating};
            }
            else{
                return joke;
            }
        }).sort((j1, j2) => j1.rating < j2.rating);

        this.storeJokes();
        this.setState({jokes: newJokes});
    }

    render() {
        return (
            <div className='DadJokes'>
                <section className='DadJokes-Banner'>
                    <h1>DAD JOKES</h1>
                    <FontAwesomeIcon size='2xl' icon={faLaughBeam } bounce={true} className='DadJokes-Banner-Icon' />
                    <button onClick={this.retrieveJokesFromInternet}>Get New Jokes</button>
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