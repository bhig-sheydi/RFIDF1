import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes} from "react-router-dom"
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Nav/>
         <Routes>
          <Route path='/'  element={<Home/>}/>
          {/* <Route path='/'  element={}/>
          <Route path='/'  element={}/>
          <Route path='/'  element={}/>
          <Route path='/'  element={}/>
          <Route path='/'  element={}/> */}
         </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
