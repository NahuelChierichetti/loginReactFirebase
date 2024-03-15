import React, { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import './EditarPerfil.css'


const EditarPerfil = () => {
  
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-body shadow">
                <h2>Nombre</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EditarPerfil
