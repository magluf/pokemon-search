import React from 'react';
import './PokemonInfo.scss';

interface PokemonInfoProps {
  url: string;
  name: string;
}

const PokemonInfo = ({ url, name }: PokemonInfoProps) => (
  <div className="PokemonInfo">
    <div>{url}</div>
  </div>
);

export default PokemonInfo;
