
import './App.css'
import { useState } from 'react';

function App() {
  let [counter , setCounter]=useState(0);

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter+1);
    }
   
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter -1);
    }
    
  }

  
 
  return (
    
    <>
      <h1>Ayush Count's</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>

    </>
  )
}

export default App
