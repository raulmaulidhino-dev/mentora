import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registrasi from './components/Registrasi'
import Beranda from './components/Beranda'

const App = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
      <Route path="/beranda" element={<Beranda />} />
    </Routes>
  )
}

export default App
