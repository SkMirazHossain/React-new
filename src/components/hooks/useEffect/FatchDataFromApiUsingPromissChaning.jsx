import "./Pokemon.css";
import { useEffect, useState } from "react";

export const FatchDataFromApi = () => {
//here the API data is an object so we can't pass arrey in useState and also we can't use map methode.
  const [pokemon, setPokemon] = useState(null);



{/* 
Purpose of this function https://prnt.sc/4ztxcVQB4cWM is to fetches data from the API and updates the state "pokemon" with the response.
EXPLAINING STEP BY STEP:-
fetch(API) Sends a GET request to the API endpoint.
.then((res) => res.json()) Converts the raw response (res) into a JavaScript object using .json() This is asynchronous because the response needs to be parsed.
.then((data) => { setPokemon(data); })
The parsed Pokémon data (data) is passed to setPokemon, updating the pokemon state.
Once setPokemon is called, the component re-renders with the updated state.

Modern Alternative of this featching function is async/await to avoide promise chaining.

const fetchPokemon = async () => {
  const res = await fetch(API);
  const data = await res.json();
  setPokemon(data);
};

*/}
// API always return promiss
// our Api end point is this  https://prnt.sc/hpER5T-OVYWv
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon = () => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
        })
    };



  useEffect(() => {
    fetchPokemon();
  }, []);

//   console.log(pokemon);

  if (!pokemon)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );


  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};