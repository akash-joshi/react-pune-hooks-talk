import React from 'react';

const state = ["Element 1","Element 2","Element 3"];

function App() {
  return (
    <section>
    { state.map( element => <div>{element}</div>) }
    </section>
  );
}

export default App;
