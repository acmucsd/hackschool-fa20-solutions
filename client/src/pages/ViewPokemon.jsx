import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import Navbar from '../components/Navbar';
import API from '../API';
import './style.css';


const ViewPokemon = () => {

    const [body, setBody] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Loads the current list of pokemons */
    useEffect(() => {
       API.getPokemon()
       .then((response) => {
           setBody(response.data.pokemon);
           setLoading(false);
       })
    }, []);

    /* Renders the list of pokemon that matches the current filter */
    const currentPokemon = body.map((pokemon, i) => {
        return (<PokemonCard key={i} image={pokemon.image} name={pokemon.name}
            description={pokemon.description} type1={pokemon.type1} type2={pokemon.type2} moves={pokemon.moves} />);
    })

    /* Renders currentPokemons, or emptyList, depending on whether we returned pokemons */
    const listBody = () => {
        if(loading){
            return(
                <div className="pokemon-empty-result">
                    <div className="pokemon-empty-result-inner">
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }
        return currentPokemon;
    }

    return (
        <div>
            <Navbar/>
            <h2 className="view-pokemons-header">All Pokemon</h2>
            <br />

            {listBody()}
        </div>
    );
}

export default ViewPokemon;