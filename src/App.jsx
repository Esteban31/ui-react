import { useState } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
    </div>
  )
}

export default App
