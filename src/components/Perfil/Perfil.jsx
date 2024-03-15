import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import NavbarLateral from '../NavbarLateral/NavbarLateral';
import './Perfil.css'
import { PiUser } from "react-icons/pi";
import { PiListChecksLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

const Perfil = () => {
    const [perfilUsaurio, setPerfilUsuario] = useState({
      email: ''
    })

    useEffect(() => {
      const auth = getAuth()
      const usuario = auth.currentUser

      if(usuario) {
        setPerfilUsuario({
          email: usuario.email
        })
      }
    }, [])

    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 perfil">
                <h2>{perfilUsaurio.email}</h2>
                <div className="menuLat">
                  <Link to={'/editar-perfil'}><PiUser /> Mis Datos</Link>
                  <Link to={'/'}><PiListChecksLight /> Mis Publicaciones</Link>
                  <Link to={'/'}><CiLogout /> Cerrar sesión</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
              <NavbarLateral />
          </div>
        </div>
    );
};

export default Perfil;