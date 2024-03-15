import React, { useEffect, useState } from 'react';
import './ContainerListPets.css';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import { db } from '../../credenciales';
import { Link } from 'react-router-dom';
import { PiMapPinLine } from 'react-icons/pi';
import { ImWhatsapp } from 'react-icons/im';

const ContainerListPets = () => {
    const [mascotas, setMascotas] = useState([]);
    const [nuevaMascota, setNuevaMascota] = useState({
        nombre: '',
        edad: '',
        tamaño: '',
        ubicacion: '',
        telefono: '',
        comportamiento: '',
        imagen: ''
    });

    useEffect(() => {
        const obtenerMascotas = async () => {
            const mascotasRef = collection(db, 'mascotas');
            const mascotasSnapshot = await getDocs(mascotasRef);
            const listaMascotas = mascotasSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setMascotas(listaMascotas);
        };
        obtenerMascotas();
    }, []);

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 text-center my-3">
                        <Link to="/cargar-mascota" className="btnActions">
                            Quiero dar en adopción
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {mascotas.map((mascota, index) => (
                        <div className="card card-body cardMascota" key={index}>
                            <img src={mascota.imagen} alt={mascota.nombre} className="imgCardMascota" />
                            <h3>{mascota.nombre}</h3>
                            <p>
                                <PiMapPinLine /> {mascota.ubicacion}
                            </p>
                            <Link to={`/mascota/${mascota.id}`} className="btn btnContactar">
                                Ver más
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContainerListPets;