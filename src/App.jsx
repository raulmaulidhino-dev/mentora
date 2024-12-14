import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registrasi from './components/Registrasi'
import Beranda from './components/Beranda'
import TugasSaya from './components/TugasSaya'
import TugasTerbaruSaya from './components/TugasTerbaruSaya'
import ProfilSiswa from './components/ProfilSiswa'

const App = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/mata-pelajaran" element={<TugasSaya />} />
      <Route path="/tugas-saya" element={<TugasTerbaruSaya />} />
      <Route path="/profil" element={<ProfilSiswa />} />
    </Routes>
  )
}

export default App
