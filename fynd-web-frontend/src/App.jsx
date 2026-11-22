import { useState } from 'react'
import Header from './Components/Header/Header'
import "./global.css"
import Home from './Pages/Home/Home'
import FilterContainer from './Components/Filters/FilterContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <div className="webpage-container">
      <Home/>
  
  

    </div>
      
    </>
  )
}

export default App
