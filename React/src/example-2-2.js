import React, {useState} from 'react';

function App() {

  const initialState = ["Element 1","Element 2","Element 3"];
  const [bodyState, setBodyState] = useState(initialState);

  const [textState, setTextState] = useState("");

  return (
      <section>
      { bodyState.map( element => <div>{element}</div>) }
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
