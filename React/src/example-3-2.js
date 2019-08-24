import React, { useState, useEffect } from 'react';

function App() {

  const [bodyState, setBodyState] = useState([]);

  const [textState, setTextState] = useState("");

  useEffect(() => {
    if(localStorage.getItem("bodyState"))
    setBodyState([...localStorage.getItem("bodyState").split(",")]);
  }, []);

  useEffect(() => {
    localStorage.setItem("bodyState",bodyState);
  }, [bodyState])

  return (
      <section>
      {bodyState && bodyState.map( element => <div>{element}</div>) }
        <form onSubmit={ e => {
          e.preventDefault();
          setBodyState([...bodyState,textState]);
        }}>
          <input onChange={ e => setTextState(e.target.value) } type="text" />
          <button type="submit">Submit</button>
        </form>
      </section>
  );
}

export default App;
