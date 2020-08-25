import React from 'react';
import './App.css';
import Levain from "./components/Levain";
import Autolyse from "./components/Autolyse";
import Mix from "./components/Mix";
import Bulk from "./components/Bulk";
import Preshape from "./components/Preshape";
import Shape from "./components/Shape";
import Proof from "./components/Proof";
import Preheat from "./components/Preheat";
import Bake from "./components/Bake";
import Enjoy from "./components/Enjoy";

function App() {
  return (
    <div className="App">
      <h1>The perfect loaf</h1>
      <Levain/>
      <Autolyse/>
      <Mix/>
      <Bulk/>
      <Preshape/>
      <Shape/>
      <Proof/>    
      <Preheat/>  
      <Bake/>
      <Enjoy/>
    </div>
  );
}

export default App;
