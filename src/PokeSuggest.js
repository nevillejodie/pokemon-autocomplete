import React, { useState } from "react";
import Autocomplete from "./AutoComplete.js";
import SearchBar from "./PokeSuggest.js";

/* -SearchTerm
- needs to be seen by search bar > search field, autocomplete > options list
- needs to be edited by options > option, searh bar > search field
 -   options needs to be able to set the searchTerm when selecting an option
- search field needs to be able to set the searchTerm when typing into the input
- lives in PokeSuggest */

/* -needs to be seen by pokemon display
-needs to be edited by search bar > search button
    - when you click the button, need to be able to set result to be searchTerm
- lives in PokeSuggest */

function PokemonSuggest({ handleChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  function handleGrab() {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setResult(data.payload));
  }

  return (
    <div>
      <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      <Autocomplete searchTerm={searchTerm} handleSelect={handleSelect} />
    </div>
  );
}

export default PokemonSuggest;
