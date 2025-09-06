import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PurchasePage from "./pages/Purchase/PurchasePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./contexts/ThemeContext"
import { useState } from "react"

function App() {
  //test add
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  return (
    <div className= {theme}>

    <ThemeContext value={theme} >

      <Navbar theme = {theme}  setTheme={setTheme} /> 
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/order' element={<PurchasePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    
    </ThemeContext>
    </div>
  )
}

export default App
