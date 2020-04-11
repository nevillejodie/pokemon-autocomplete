import React from "react";
import css from "./SearchBar.module.css";

function SearchBar({ value, handleChange, chosenClick }) {
  return (
    <div className={css.input}>
      <input value={value} onChange={handleChange} />
      {/* <button>I Choose You!</button> */}

      <img
        onClick={chosenClick}
        src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG"
        alt="pokeball button"
      />
    </div>
  );
}

export default SearchBar;
