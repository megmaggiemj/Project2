
import './App.css';
import {useState} from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import About from './Components/AboutPage/AboutPage';
import {tinaQuotes} from './Components/quote-data';
import {geneQuotes} from './Components/quote-data';
import {louiseQuotes} from './Components/quote-data';
import {bobQuotes} from './Components/quote-data';
import {lindaQuotes} from './Components/quote-data';



export default function App() {
  const [bobsCharacter, setBobsCharacter] = useState("");
  const urlBase = "https://bobsburgers-api.herokuapp.com/characters/1"
  // const bobsUrl = `${urlBase}${inputField}`
  const [inputField, setInputField] = useState("");

  //   const url = `${urlBase}${bobsCharacter}${event}`;
const handleSubmit = (event) => {
event.preventDefault()
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => setBobsCharacter(data))
      console.log(inputField)
      setInputField("");
}
  const handleFormChange = (event) => {
    setInputField(event.target.value);
  };

  return (
    <div className="App">
      <nav>        
        <Link to='/'>
          <h2>Bob's Burgers</h2>
        </Link>

        <Link to="/about">
          About
        </Link>
      </nav>
      <h1>Bob's Burgers Project</h1>

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
        <div className="character">
        <h3>{bobsCharacter.name}</h3>
        <img className="characterImg" src={bobsCharacter.image} alt={bobsCharacter.name} />
        <p>"{bobsCharacter ? bobQuotes[1] : ""}" -Bob Belcher</p>
     </div>
     <main>
        <Routes>
          <Route path='/'/>
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
        </div>
  );
}
