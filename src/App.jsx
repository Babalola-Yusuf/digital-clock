import { useState } from 'react'
import './App.css'
import DigitalClock from './DigitalClock'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <DigitalClock />
    </div>
  )
}

export default App
