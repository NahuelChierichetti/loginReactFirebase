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
import UsuarioDetail from './components/UsuarioDetail/UsuarioDetail'
import PetDetail from './components/PetDetail/PetDetail'
import CargarMascota from './components/CargarMascota/CargarMascota'
import Perfil from './components/Perfil/Perfil'
import EditarPerfil from './components/EditarPerfil/EditarPerfil'

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
          <Route path='/cargar-mascota' element={<CargarMascota />} />
          <Route path='/usuario/:id' element={<UsuarioDetail />} />
          <Route path='/mascota/:id' element={<PetDetail />} />
          <Route path='/ofertas-activas' element={<OfertasActivas />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/editar-perfil' element={<EditarPerfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
