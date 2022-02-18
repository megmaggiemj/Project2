
import React, { useState } from "react";
// import {tinaQuotes} from "./quoteArray";
// import {geneQuotes} from "./quoteArray";
// import {louiseQuotes} from "./quoteArray";
import { bobQuotes } from "./quoteArray";
// import {lindaQuotes} from "./quoteArray";


const Character = () => {
  const [bobsCharacter, setBobsCharacter] = useState("");
  const urlBase = "https://bobsburgers-api.herokuapp.com/characters/1";
  const [inputField, setInputField] = useState("");

  const handleSubmit = (event) => {
  event.preventDefault()
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => setBobsCharacter(data))
      console.log(inputField)
      setInputField("");
  };
  const handleFormChange = (event) => {
    setInputField(event.target.value);
  }
    return (

      <div> 
      <form onSubmit={handleSubmit}>
      <label>Character: </label>

      <input
      type="text"
      placeholder="ex. Tina Belcher"
      value={inputField}
      onChange={handleFormChange}
      />
      <input type="submit" value="Submit" />

      </form>

      <div className="characterInfo">
      <h3>{bobsCharacter.name}</h3>
      <img className="characterImg" src={bobsCharacter.image} alt={bobsCharacter.name} />
      <p>"{bobsCharacter ? bobQuotes[1] : ""}" -Bob Belcher</p> 
      </div>
      </div>

      )
      };



export default Character;