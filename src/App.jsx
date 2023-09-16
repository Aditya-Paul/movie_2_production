/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* for home section*/}
      <div className='main_container'>
        <Home></Home>
      </div>

      
    </>
  )
}

export default App
