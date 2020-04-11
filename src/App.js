import React, { useState } from "react";
import "./App.css";
import "./PokemonDisplay.js";
import SearchBar from "./SearchBar";
import PokemonDisplay from "./PokemonDisplay";
import AutoComplete from "./AutoComplete";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    setResults("");
  }
  function handleSelect(option) {
    setSearchTerm(option);
  }

  function chosenClick() {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResults(data[0]);
      });
  }
  return (
    <div>
      <SearchBar
        handleChange={handleChange}
        value={searchTerm}
        chosenClick={chosenClick}
      />
      {results ? (
        <PokemonDisplay results={results} />
      ) : (
        <AutoComplete searchTerm={searchTerm} handleSelect={handleSelect} />
      )}
    </div>
  );
}

export default App;
