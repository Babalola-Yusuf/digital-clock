import { useState } from 'react'
import './App.css'
import backgroundImage from './assets/bg-img.jpg'
import DigitalClock from './DigitalClock'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DigitalClock />
    </div>
  )
}

export default App
