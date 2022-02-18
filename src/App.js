import "./App.css";
import { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS //
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutPage/AboutPage";
import Character from "./Components/CharacterInfo/Characters";
import Dropdown from "./Components/Dropdown/Dropdown";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <h1>Bob's Burgers Project</h1>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Welcome" />
          <Route path="/MeetTheBelchers" element={<Character />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
