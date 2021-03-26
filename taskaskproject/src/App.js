import React from "react";
import './App.css';
import Header from "./Header.js";
import Posts from "./Posts.js";
import CreatePosts from "./CreatePosts.js"; 

function App() {
  return (
    <div className="app">
      <Header/>
      {/* <CreatePosts/>  */}
      <Posts/> 
    </div>
  );
}

export default App;
