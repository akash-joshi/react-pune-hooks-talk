import { useState, useEffect } from 'react';

export default (storageKey, initialState) => {

  const [state, setState] = useState("");

  useEffect(() => {
    const localState = localStorage.getItem(storageKey);

    if(!localState){
      localStorage.setItem(storageKey,initialState);
      setState(initialState);
    } else {
      setState([...localStorage.getItem(storageKey).split(",")]);
    }
  }, []);

  const ourSetState = newState => {
    localStorage.setItem(storageKey,newState);
    setState(newState);
  }

  return [state, ourSetState];
}