import { useState } from "react";
import AppContext from "./context/AppContext";
import "./App.css";
import { Increase } from './components/Increase';
import { Decrease } from './components/Decrease';

export const App = () => {
  const [num, setNum] = useState(0);

  function adds() {
    setNum(num +1)
  }

  function removes() {
    setNum(num -1)
  }

  return (
    <AppContext.Provider value={{ num: num, adds, removes }}>
      <div className="App">
        <h1>{num}</h1>
        <Increase />
        <Decrease />
      </div>
    </AppContext.Provider>
  );
};
