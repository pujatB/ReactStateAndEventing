import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Back from "./components/Back";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={Categories}></Route>
          <Route exact path="/menu" component={Back}></Route>
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
