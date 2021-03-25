import React from "react";
import './App.css';
import Header from "./Header.js";
import Posts from "./Posts.js";

function App() {
  return (
    <div className="app">
      <Header/>
      <Posts/> 
    </div>
  );
}

export default App;
