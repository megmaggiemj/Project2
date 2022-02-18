import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import SelectCharacter from "./ApiConstruct";
import { tinaQuotes } from "./quoteArray";
import {geneQuotes} from "./quoteArray";
import {louiseQuotes} from "./quoteArray";
import { bobQuotes } from "./quoteArray";
import {lindaQuotes} from "./quoteArray";
import "bootstrap/dist/css/bootstrap.min.css";

const Character = () => {
  const randomTina = Math.floor(Math.random() * 5)
  const [bobsCharacter, setBobsCharacter] = useState("");
  const urlRandom = Math.floor(Math.random() * 492)
  const urlBase = `https://bobsburgers-api.herokuapp.com/characters/${urlRandom}`;

  const [inputField, setInputField] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => setBobsCharacter(data));
    console.log(inputField);
    setInputField("");
  };

  const handleFormChange = (event) => {
    setInputField(event.target.value);
  };
  if(bobsCharacter) {
      return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Want to know about a random character? </label>

        <div>
        <input type="submit" value="Click here!" />
        </div>
      </form>

      <div className="characterInfo">
        <h3>{bobsCharacter.name}</h3>
        <h4>Character Age: {bobsCharacter.age}</h4>
        <h4>Voiced by: {bobsCharacter.voicedBy}</h4>
        <img
          className="characterImg"
          src={bobsCharacter.image}
          alt={bobsCharacter.name}
        />


      <div><p>Words of wisdom from Tina Belcher:</p>
        <p>{bobsCharacter ? tinaQuotes[randomTina] : ""}</p>
        </div>
        </div>
    </div>
  );
} else {
  return(
    <form onSubmit={handleSubmit}>
    <label>Want to know about a random character? </label>

    <div>
    <input type="submit" value="Click here!" />
    </div>
  </form>
  )

}

};
export default Character;
