import React, { useState } from 'react'
import loginRecruiter from '../../assets/img/recruiter-login.svg'
import imageProfile from '../../assets/img/perfil.jpg'
import './Login.css'

import appFirebase from '../../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)
  
  const functionAutentication = async(e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (registrando) {
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("Asegurese que la contraseña tenga más de 8 caracteres")
      }
    } else {
      try{
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("El email o la contraseña son incorrectos")
      }
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4 col-12 mt-5 mt-md-0">
          <div className="padre">
            <div className="card card-body shadow">
              <img src={imageProfile} className='estilo-profile' alt="" />
              <form onSubmit={functionAutentication}>
                <input type="text" placeholder='Ingresar Email' className='cajatexto' id="email"/>
                <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id="password"/>
                <button className='btnform'>{registrando ? 'Registrate' : 'Iniciar Sesión'}</button>
              </form>
              <h4 className='texto'>{registrando ? 'Si ya tienes cuenta' : 'No tienes cuenta'}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? 'Iniciar Sesión' : 'Registrate'}</button></h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={loginRecruiter} alt="Login Recruiter" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}

export default Login
