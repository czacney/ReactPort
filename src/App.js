import React from "react";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Footer from "./Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Card />
        <Footer />
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
