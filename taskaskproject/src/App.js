import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import HomePage from "./pages/home";
import uploadPage from "./pages/uploadPage"
import page404 from "./pages/404";
import messagesPage from "./pages/messagesPage";

function App() {
  return (
    <div className="app">

      <Router> 
        <Switch> 
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/upload" component={uploadPage}/>
          <Route exact path="/messages" component={messagesPage}/>
          <Route exact path="/404" component={page404}/>
          <Redirect to="/404"/> 
        </Switch>
      </Router> 





    </div>
  );
}

export default App;
