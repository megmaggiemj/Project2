
import './App.css';
import {useState} from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import About from './Components/AboutPage/AboutPage';
import Character from './Components/CharacterInfo/Characters';


export default function App() {
  const bouncyBurger = `https://i.gifer.com/1SX6.gif`;
  const burgerGif = `https://i.gifer.com/GBP.gif`;
  return (
    <div className="App">
      <nav>        
        <Link to='/'>
          <h2>Bob's Burgers</h2>
        </Link>
        <Link to='/MeetTheBelchers'>
          Meet the Belchers
        </Link>
        <Link to='/about'>
          About
        </Link>
      </nav>
      <h1>Bob's Burgers Project</h1>
      
    {/* GIF TO PLAY ONCE ON PAGE LOAD */}
      <div className= "gif">
        <img src={burgerGif} />
        {/* <img src={bouncyBurger} /> */}
      </div>

     <main>
        <Routes>
          <Route path='/'/>
          <Route path='/MeetTheBelchers' element={<Character />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
        </div>
  );
}
