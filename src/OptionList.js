import React from "react";
import Option from "./Option.js";

function OptionList() {
  return (
    <ul>
      {options.map(option => (
        <Option pokemon={option} onClick={() => handleSelect(option.name)} />
      ))}
    </ul>
  );
}

export default OptionList;
