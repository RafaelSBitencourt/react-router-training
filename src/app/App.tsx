import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import "../style/milligram/milligram.css";
import { Navbar } from "../components/app/navbar";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { Contato } from "../pages/contato";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <Home />
      <Sobre />
      <Contato />
    </div>
  );
}

export default App;
