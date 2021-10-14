import React from 'react'
import './nav.css'
import TextTransition, { presets } from "react-text-transition";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";



const TEXTS = [
  "A",
  "Real",
  "State",
  "of",
  "Events"
];

// Newly Addded 
const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>
    setIndex(index => index + 1),
    3000 // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);

const Nav = () => {
  return (



    <div className="home">
      <div className="heading">
        {/* <Animated.View style={{transform: [{rotate: spin}] }} > */}
        <img
          id="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rq_pt_8yriG6lUtinQ6UiO_9Km4GfVwPVA&usqp=CAU"
        />
        {/* </Animated.View> */}
        {/* <h1>A Real State of Events</h1> */}
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </div>

      <div className="nav">
        <span className="navButton">
          <NavLink
            className="navLink"
            to="/"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "1.1em",
              color: "blue",
              textDecoration: "none",
            }}
          >
            Home
          </NavLink>
        </span>

        <span className="navButton">
          <NavLink
            className="navLink"
            to="/categories"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "1.1em",
              color: "blue",
              textDecoration: "none",
            }}
          >
            Categories
          </NavLink>
        </span>

        <span className="navButton">
          <NavLink
            className="navLink"
            to="/back"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "1.1em",
              color: "blue",
              textDecoration: "none",
            }}
          >
            Back
          </NavLink>
        </span>

      </div>
    </div>

  )
}

export default Nav
