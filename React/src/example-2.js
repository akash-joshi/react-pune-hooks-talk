import React, {useState} from 'react';

function App() {

  const initialState = ["Element 1","Element 2","Element 3"];
  const [bodyState, setBodyState] = useState(initialState);

  return (
      <section>
      { bodyState.map( element => <div>{element}</div>) }
      </section>
  );
}

export default App;
