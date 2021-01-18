import React from "react";
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import HooksDeEstado from './components/HooksDeEstado';
function App() {
  const user = {
    name:"Luis Aguirre",
    age:30,
    color:"Blue"
  };

  const saludarFn = (name)=>{
    console.log("Hello "+name);

    console.log(`Hola soy ${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <HooksDeEstado/>
      </header>
    </div>
  );
}

export default App;
