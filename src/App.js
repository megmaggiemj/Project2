
import './App.css';
import {useState} from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
// COMPONENTS //
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/AboutPage/AboutPage';
import Character from './Components/CharacterInfo/Characters';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  // const bouncyBurger = `https://i.gifer.com/1SX6.gif`;
  // const burgerGif = `https://i.gifer.com/GBP.gif`;
  return (
    <div className="App">

      <nav>    
      <NavBar />
      </nav> 
      <h1>Bob's Burgers Project</h1>
      
    {/* GIF TO PLAY ONCE ON PAGE LOAD */}


     <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Welcome'/>
          <Route path='/MeetTheBelchers' element={<Character />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
        </div>
  );
}
