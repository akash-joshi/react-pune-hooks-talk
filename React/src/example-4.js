import React, { useState, useEffect } from 'react';
import useLocalStorage from "./example-4-hook";

function App() {

  const [bodyState, setBodyState] = useLocalStorage("bodyState",[]);

  const [textState, setTextState] = useState("");

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
