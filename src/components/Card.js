import React from "react";

const Card = (pokemon) => {
  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
