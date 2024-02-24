import React from 'react'
import './Home.css'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({emailUsuario}) => {
  return (
    <div>
      <h2 className='text-center'>Bienvenido usuario {emailUsuario}</h2>
      <button onClick={()=>signOut(auth)} className='btn btn-primary'>Cerrar Sesión</button>
    </div>
  )
}

export default Home
