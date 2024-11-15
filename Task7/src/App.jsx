import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contant from './Pages/Contant/Contant'
import photo from './assets/Images/Desktop.png'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/about' element ={<About />} />
      <Route path='/contact' element ={<Contant />} />
    </Routes>
    
    </>
  )
}

export default App
