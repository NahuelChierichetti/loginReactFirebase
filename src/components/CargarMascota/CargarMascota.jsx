import React, { useState } from 'react';
import { collection, addDoc } from '@firebase/firestore';
import { db, storage } from '../../credenciales';
import './CargarMascota.css'
import { Link } from 'react-router-dom';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const CargarMascota = () => {
    const [urlImagen, setUrlImagen] = useState('')

    const auth = getAuth()

    const guardarInfo = async (e) => {
        e.preventDefault();
        const userId = auth.currentUser.uid;
        const nombre = e.target.nombre.value;
        const edad = e.target.edad.value;
        const tamaño = e.target.tamaño.value;
        const ubicacion = e.target.ubicacion.value;
        const telefono = e.target.telefono.value;
        const caracter = e.target.comportamiento.value;
        
        const newMascota = {
            nombre: nombre,
            edad: edad,
            tamaño: tamaño,
            ubicacion: ubicacion,
            telefono: telefono,
            caracter: caracter,
            imagen: urlImagen,
            userId: userId
        } 

        try {
            await addDoc(collection(db, 'mascotas'), newMascota)
            e.target.reset()
            window.location.href = '/'
        } catch (error) {
            console.log('Error al cargar la mascota:', error)
        }
    }

    const fileHandler = async (e) => {
        const archivo = e.target.files[0]
        const refArchivo = ref(storage, `documentos/${archivo.name}`)
        console.log(refArchivo)

        try {
            await uploadBytes(refArchivo, archivo)
            const urlImagen = await getDownloadURL(refArchivo)
            setUrlImagen(urlImagen)
        } catch (error) {
            console.error('Error al subir el archivo:', error)
        }
    }

    return (
        <div className='container contenedor-form'>
            <div className="row">
                <div className="col-12">
                    <h2 className='title-cargar'>Cargar mascota</h2>
                        <form onSubmit={guardarInfo} className='form-cargar card card-body shadow'>
                            <label htmlFor="">Nombre</label>
                            <input type="text" id="nombre" placeholder="Nombre" required />
                            <label htmlFor="">Edad</label>
                            <input type="text" id="edad" placeholder="Edad" required />
                            <label htmlFor="">Tamaño</label>
                            <input type="text" id="tamaño" placeholder="Tamaño" required />
                            <label htmlFor="">Ubicación</label>
                            <input type="text" id="ubicacion" placeholder="Ubicación" required />
                            <label htmlFor="">Teléfono de conacto</label>
                            <input type="tel" id="telefono" placeholder="Teléfono" required />
                            <label htmlFor="">Comportamiento</label>
                            <textarea type="textarea" id="comportamiento"  placeholder="Describí cómo es la conducta del animal" required />
                            <label htmlFor="">Foto del animal</label>
                            <input type="file" id="imagen" onChange={fileHandler} placeholder="URL de imagen" required />
                            <button type="submit" className='btn-guardar'>Guardar</button>
                            <Link to={'/'} className='btn-volver'>Volver atrás</Link>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default CargarMascota;