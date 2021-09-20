import React from 'react';
import './PokemonInfo.scss';

interface PokemonInfoProps {
  url: string;
  name: string;
}

const PokemonInfo = ({ url, name }: PokemonInfoProps) => (
  <div className="PokemonInfo">
    <div>Name: {name}</div>
    <div>Url: {url}</div>
  </div>
);

export default PokemonInfo;
