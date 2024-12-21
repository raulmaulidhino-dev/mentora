import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Registrasi from './components/Registrasi.jsx'
import Beranda from './components/Beranda.jsx'
import TugasSaya from './components/TugasSaya.jsx'
import TugasTerbaruSaya from './components/TugasTerbaruSaya.jsx'
import ProfilSiswa from './components/ProfilSiswa.jsx'
import Guru from './components/Guru.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/mata-pelajaran" element={<TugasSaya />} />
      <Route path="/tugas-saya" element={<TugasTerbaruSaya />} />
      <Route path="/profil" element={<ProfilSiswa />} />
      <Route path="/guru" element={<Guru />} />
    </Routes>
  )
}

export default App
