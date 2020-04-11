import React from "react";
import css from "./PokemonDisplay.module.css";

function PokemonDisplay({ results }) {
  return (
    <div>
      <img
        className={css.theimage}
        src={results.img_url}
        alt="this is pokemon"
      />
      <h1 className={css.name}>{results.name}</h1>
      <h2 className={css.desc}>{results.description}</h2>
      <h3 className={css.types}>Types: {results.types}</h3>
    </div>
  );
}

export default PokemonDisplay;
