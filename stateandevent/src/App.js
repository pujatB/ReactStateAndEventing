import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Back from "./components/Back";
import { useState } from "react";
import { useContext } from "react";
import FaveButton from "./components/FaveButton"
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsernameContext } from "./components/UsernameContext";


function App() {

  const [username, setUsername] = useState("");


  return (
    <div>
      <div className="App">
        <Nav />
        <UsernameContext.Provider value={{ username, setUsername }}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/back" component={Back}></Route>
          </Switch>
        </UsernameContext.Provider>
      </div>
    </div>

  );
};

export default App;
