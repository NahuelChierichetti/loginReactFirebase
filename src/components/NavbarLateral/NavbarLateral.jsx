import React from 'react'
import './NavbarLateral.css'
import { Link } from 'react-router-dom';

import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const NavbarLateral = ({emailUsuario, handleOptionMenu}) => {
  return (
    <div>
      <div className="container menuLateral">
        <div className="row">
            <div className="col-12">
                <h4 className='title-bienvenido'>Bienvenido {emailUsuario}</h4>
                <ul>
                    <li>
                        <button onClick={() => handleOptionMenu('usuarios')}>Usuarios</button>
                    </li>
                    <li>
                        <button onClick={() => handleOptionMenu('ofertas-activas')}>Ofertas Activas</button>
                    </li>
                </ul>
                <button onClick={()=>signOut(auth)} className='btn btn-primary'>Cerrar Sesión</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarLateral
