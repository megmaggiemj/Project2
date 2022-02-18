
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
// import SelectCharacter from "./ApiConstruct";
import {tinaQuotes} from "./quoteArray";
// import {geneQuotes} from "./quoteArray";
// import {louiseQuotes} from "./quoteArray";
import { bobQuotes } from "./quoteArray";
// import {lindaQuotes} from "./quoteArray";
import 'bootstrap/dist/css/bootstrap.min.css';



const Character = () => {
  const [bobsCharacter, setBobsCharacter] = useState("");
  const urlBase = "https://bobsburgers-api.herokuapp.com/characters/473";
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
      <h4>{bobsCharacter.age}</h4>
      <img className="characterImg" src={bobsCharacter.image} alt={bobsCharacter.name} />
      <p>{bobsCharacter ? tinaQuotes[1] : ""}</p> 
      </div>
      </div>
      
      )
      };



export default Character;