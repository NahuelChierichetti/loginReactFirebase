import { useState } from 'react'
import './App.css'


import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const auth = getAuth(appFirebase)

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Usuarios from './components/Usuarios/Usuarios';
import OfertasActivas from './components/OfertasActivas/OfertasActivas';

function App() {

  const [usuario, setUsuario] = useState(null)
  
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={usuario ? <Home emailUsuario={usuario.email}/> : <Login/>}/>
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/ofertas-activas' element={<OfertasActivas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
