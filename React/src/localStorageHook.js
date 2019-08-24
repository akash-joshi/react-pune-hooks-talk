import { useState, useEffect } from "react";

export default (storageKey, initialState) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const localState = localStorage.getItem(storageKey);

    if(localState) {
      setState([...localStorage.getItem(storageKey).split(",")]);
    } else {
      localStorage.setItem(storageKey,initialState);
      setState(initialState);
    }
  }, []);

  const setLocalState = newState => {
    localStorage.setItem(storageKey,newState);
    setState(newState);
  };

  return [state, setLocalState];
}