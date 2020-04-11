import React from "react";
import css from "./Option.module.css";

function Option({ onClick, imageUrl, name, description }) {
  return (
    <li onClick={onClick}>
      <div className={css.option} className="desc">
        <img alt="this is pokemon" src={imageUrl} />
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Option;
