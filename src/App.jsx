import { useState } from 'react'
import './App.css'

function App() {
const [counter , setcounter] = useState(10)


const Addvalue = () => {
  if(counter <20){
  setcounter(counter + 1)
  }
}
const Removevalue = () =>{
  if(counter >0){
  setcounter(counter - 1)
  }
}

  return (
    <>
    <div>
      <h1>My First React App</h1>

      <h2>{counter}</h2>
      <button
      onClick={Addvalue}
      >Add Counter</button>
      <br />
      <br />
      <button
      onClick={Removevalue}
      >Remove Counter</button>
    </div>
    </>
  )
}

export default App
