import React, { useEffect, useState } from 'react';
import './App.scss';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import Search from './components/Search/Search';

interface Pokemon {
  name: string;
  url: string;
}

interface IPokemonSearchResult {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
}

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonList, setPokemonList] = useState({} as IPokemonSearchResult);
  const [filteredPokemon, setFilteredPokemon] = useState({
    name: '',
    url: '',
  } as Pokemon | null);
  const [searchSlug, setSearchSlug] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearchPokemon = (pokemon: string) => {
    setSearchSlug(pokemon);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearched(true);
        setPokemonList(data);
      });
  };

  useEffect(() => {
    console.log(pokemonList);
    console.log(`searching...`);
    const pokemon = pokemonList.results?.find(
      (pokemon) => pokemon.name === searchSlug
    );
    if (pokemon) {
      setFilteredPokemon(pokemon);
    } else {
      setFilteredPokemon({
        name: '',
        url: '',
      });
    }
  }, [pokemonList, searchSlug]);

  const renderPokemonInfo = () => {
    if (searched) {
      return filteredPokemon!.name !== '' ? (
        <PokemonInfo {...filteredPokemon!} /> // destructuring request.
      ) : (
        <div>Pokémon not found</div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <Search handleSearchPokemon={handleSearchPokemon} />
      {renderPokemonInfo()}
    </div>
  );
}

export default App;
