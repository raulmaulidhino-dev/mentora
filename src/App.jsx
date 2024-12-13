import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registrasi from './components/Registrasi'

const App = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
    </Routes>
  )
}

export default App
