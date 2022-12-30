import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";

function App() {

  const message = "Pokemon Not Found Try Searching With Correct Name or Get a Random Pokemon By Clicking Random Pokemon Button"

  const [pokemonData, setPokemonData] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [found, setFound] = useState(false)

  const getPokemon = async (index) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
      const data = await res.json();
      setPokemonData(data);
      setFound(true)
    } catch {
      setFound(false)
    }
    
  }

  useEffect(() => {
    getPokemon(25);
  }, []);

  function getRandomPokemon() {
    const index = Math.ceil(Math.random() * 900);
    console.log(index);
    getPokemon(index);
    setShowMore(false);
  }

  function showDetails() {
    setShowMore((preVal) => !preVal);
  }

  function handleChange(event) {
    setSearchParam(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault()
    getPokemon(searchParam)
  }

  console.log(pokemonData);

  return (
    <div className="App" id="home">
      <Header
        handleChange={handleChange}
        value={searchParam}
        handleSubmit={handleSubmit}
      />
      <div className="pokemon-container">
        {pokemonData &&
          (found ? (
            <Pokemon
              index={pokemonData.id}
              name={pokemonData.name}
              height={pokemonData.height}
              weight={pokemonData.weight}
              types={pokemonData.types}
              stats={pokemonData.stats}
              moves={pokemonData.moves}
              abilities={pokemonData.abilities}
              baseExperience={pokemonData.base_experience}
              heldIteems={pokemonData.held_items}
              showMore={showMore}
              handleClick={showDetails}
            />
          ) : (
            <p className="message">{message}</p>
          ))}
      </div>
      <div className="random">
        <button className="pokemon-button" onClick={getRandomPokemon}>
          Random Pokemon
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
