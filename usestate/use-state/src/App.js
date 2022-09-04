import './App.css';

import { useState } from "react";

// Gerenciar o estado de algum valor 
// como se fosse um getter e setter

function App() {

  const [name, setName] = useState("Matheus")

  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    //Previous Value
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
    
  }

  return (
    <div className="App">
      <h2>Meu nome É: {name}</h2>
      <input 
      type="text"
      value={name}
      onChange={(e) => {setName(e.target.value)}}
      />
      <div>
        Número: {number}
        <button onClick={changeNumber}>Mudar número!</button>
      </div>
    </div>
  );
}

export default App;
