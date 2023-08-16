import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [personas, setColor]= useState([]);

  const addColor= (personacolor) => {
    setColor([...personas, personacolor]);
  }

  return (
    <div className='App'> 
    <h1>Elige tu color preferido</h1>
    <Form onAddColor={addColor}/>
    <Card personas={personas}/>
    </div>
  )
}

export default App
