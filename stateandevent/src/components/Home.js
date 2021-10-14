import React from 'react'
import { useState, useContext } from 'react';
import FaveButton from './FaveButton';
import { createContext } from 'react';
import Back from './Back';
import { UsernameContext } from './UsernameContext';

const Home = () => {

  const { username, setUsername } = useContext(UsernameContext);
  const [nameInput, setNameInput] = useState("");
  const [readsCount, setReadsCount] = useState(0);

  const increaseReadsCount = () => setReadsCount(prevState => prevState + 1);

  const handleInput = e => {
    setNameInput(e.target.value)
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setUsername(nameInput);
    setNameInput("");
  };

  return (
    <div>
      <div className="news-reader">
        <aside>
          <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'friend'}!</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="That's not my name!" value={nameInput} onChange={handleInput} />
            <input type="submit" value="Update!" />
          </form>
          <p>There have been <span role="figure" id="reads">{readsCount}</span> reader(s)!</p>
          <button aria-label="Read story" onClick={increaseReadsCount}>I've read!</button>
        </aside>
      </div>
    </div>


  )
}

export default Home
