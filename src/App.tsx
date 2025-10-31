import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
 return (     
 
 <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    )
}

export default App;
