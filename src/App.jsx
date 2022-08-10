import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Stepper} from './Stepper/Stepper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Stepper initCount={count}/>
   </div>
  )
}

export default App
