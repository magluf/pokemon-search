import React, { useState } from 'react';
import './Search.scss';

interface ISearch {
  handleSearchPokemon: (pokemon: string) => void;
}

const Search = ({ handleSearchPokemon }: ISearch) => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className="Search">
      <input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearchPokemon(pokemonName);
        }}
      />
      <button onClick={() => handleSearchPokemon(pokemonName)}>Go!</button>
    </div>
  );
};

export default Search;
