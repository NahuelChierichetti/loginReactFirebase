import React from 'react'
import './NavbarLateral.css'
import { Link } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { PiPlus } from "react-icons/pi";
import { PiUser } from "react-icons/pi";

import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const NavbarLateral = ({handleOptionMenu}) => {
  return (
    <div>
      <div className="container menuLateral">
        <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3 containerMenu">
                  {/* <button className='btnMenu' onClick={() => handleOptionMenu('inicio')}></button> */}
                  <Link className='btnMenu' to={'/'}><HiOutlineHome /></Link>
                </div>
                <div className="col-3 containerMenu">
                  {/* <button className='btnMenu' onClick={() => handleOptionMenu('')}><HiOutlineSearch /></button> */}
                  {/* <Link className='btnMenu' to={'/'}><HiOutlineSearch /></Link> */}
                  <Link className='btnMenu' to="/cargar-mascota"><PiPlus /></Link>
                </div>
                <div className="col-3 containerMenu">
                  {/* <button className='btnMenu' onClick={() => handleOptionMenu('')}><HiOutlineHeart /></button> */}
                  <Link className='btnMenu' to={'/'}><HiOutlineHeart /></Link>
                </div>
                <div className="col-3 containerMenu">
                  {/* <button className='btnMenu' onClick={() => handleOptionMenu('')}><PiUser /></button> */}
                  <Link className='btnMenu' to={'/perfil'}><PiUser /></Link>
                </div>
              </div>
                {/* <button onClick={()=>signOut(auth)} className='btn btn-primary'>Cerrar Sesión</button> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarLateral
