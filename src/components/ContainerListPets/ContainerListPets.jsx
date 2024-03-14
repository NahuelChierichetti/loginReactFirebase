import React, { useEffect, useState } from 'react'
import './ContainerListPets.css'
import { collection, getDocs, addDoc } from '@firebase/firestore';
import { db } from '../../credenciales';
import { Link } from 'react-router-dom';
import { PiMapPinLine } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

const ContainerListPets = () => {
    const [mascotas, setMascotas] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nuevaMascota, setNuevaMascota] = useState({
        nombre: '',
        edad: '',
        tamaño: '',
        ubicacion: '',
        telefono: '',
        comportamiento: '',
        imagen: ''
    })

    useEffect(() => {
        const obtenerMascotas = async () => {
            const mascotasRef = collection(db, 'mascotas');
            const mascotasSnapshot = await getDocs(mascotasRef);
            const listaMascotas = mascotasSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setMascotas(listaMascotas)
        }
        obtenerMascotas()
    }, [])

    const abrirFormulario = () => {
        setMostrarFormulario(true)
    }

    const cerrarFormulario = () => {
        setMostrarFormulario(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'mascotas'), nuevaMascota)
            setNuevaMascota({
                nombre: '',
                edad: '',
                tamaño: '',
                comportamiento: '',
                ubicacion: '',
                telefono: '',
                imagen: ''
            })

            const mascotasRef = collection(db, 'mascotas');
            const mascotasSnapshot = await getDocs(mascotasRef);
            const listaMascotas = mascotasSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setMascotas(listaMascotas)
            cerrarFormulario() 
        } catch (error) {
            console.error('Error al registrar la mascota:', error);
        }
    }

    const handleChange = (e) => {
        setNuevaMascota({
            ...nuevaMascota,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <div className='container mt-4'>
                <div className="row">
                    <div className="col-12">
                        <button className='btnActions' onClick={abrirFormulario}>Quiero dar en adopción</button>
                    </div>
                </div>
                {mostrarFormulario && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={cerrarFormulario}>&times;</span>
                            <h2>Cargar mascota</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="">Nombre</label>
                                <input type="text" name="nombre" value={nuevaMascota.nombre} onChange={handleChange} placeholder="Nombre" required />
                                <label htmlFor="">Edad</label>
                                <input type="text" name="edad" value={nuevaMascota.edad} onChange={handleChange} placeholder="Edad" required />
                                <label htmlFor="">Tamaño</label>
                                <input type="text" name="tamaño" value={nuevaMascota.tamaño} onChange={handleChange} placeholder="Tamaño" required />
                                <label htmlFor="">Ubicación</label>
                                <input type="text" name="ubicacion" value={nuevaMascota.ubicacion} onChange={handleChange} placeholder="Ubicación" required />
                                <label htmlFor="">Teléfono de conacto</label>
                                <input type="tel" name="telefono" value={nuevaMascota.telefono} onChange={handleChange} placeholder="Teléfono" required />
                                <label htmlFor="">Caracter del animal</label>
                                <input type="text" name="comportamiento" value={nuevaMascota.comportamiento} onChange={handleChange} placeholder="Caracter" required />
                                <label htmlFor="">Foto del animal</label>
                                <input type="file" name="imagen" value={nuevaMascota.imagen} onChange={handleChange} placeholder="URL de imagen" required />
                                <button type="submit" className='btn btn-primary btnGuardar'>Guardar</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-12">
                    {mascotas.map((mascota, index) => (
                        <div className="card card-body cardMascota" key={index}>
                            <img src={mascota.imagen} alt={mascota.nombre} className='imgCardMascota'/>
                            <h3>{mascota.nombre}</h3>
                            <p><PiMapPinLine /> {mascota.ubicacion}</p>
                            <Link to={`/mascota/${mascota.id}`} className='btn btnContactar'>Ver más</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContainerListPets