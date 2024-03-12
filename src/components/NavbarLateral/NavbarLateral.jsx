import React from 'react'
import './NavbarLateral.css'
import { Link } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
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
                  <button className='btnMenu' onClick={() => handleOptionMenu('inicio')}><HiOutlineHome /></button>
                </div>
                <div className="col-3 containerMenu">
                  <button className='btnMenu' onClick={() => handleOptionMenu('')}><HiOutlineSearch /></button>
                </div>
                <div className="col-3 containerMenu">
                  <button className='btnMenu' onClick={() => handleOptionMenu('')}><HiOutlineHeart /></button>
                </div>
                <div className="col-3 containerMenu">
                  <button className='btnMenu' onClick={() => handleOptionMenu('')}><PiUser /></button>
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
