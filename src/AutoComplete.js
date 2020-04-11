import React, { useState, useEffect } from "react";
import css from "./AutoComplete.module.css";

function Autocomplete({ searchTerm, handleSelect }) {
  const [options, setOptions] = useState([""]);

  useEffect(
    function() {
      fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          setOptions(data);
        });
    },
    [searchTerm]
  );

  return (
    <ul>
      {options.map(item => (
        <li onClick={() => handleSelect(item.name)}>
          <div className={css.modules}>
            <img className={css.pics} src={item.img_url} alt="pokemon" />
            <p>{item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Autocomplete;
