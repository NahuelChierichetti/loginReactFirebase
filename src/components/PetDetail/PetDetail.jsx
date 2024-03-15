import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../credenciales'
import { PiMapPinLine } from 'react-icons/pi';
import { PiCalendarLight } from "react-icons/pi";
import { PiDogLight } from "react-icons/pi";
import './PetDetail.css'
import NavbarLateral from '../NavbarLateral/NavbarLateral';

const PetDetail = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        const docRef = doc(db, 'mascotas', id)
        getDoc(docRef)
            .then((response) => {
                console.log(response)
                setItem({
                    ...response.data(),
                    id: response.id
                })
            })
    }, [id])

    return (
        <div>
            {item ? (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-body cardMascota mascotaDetail">
                                    <img src={item.imagen} alt={item.nombre} className="imgCardMascota" />
                                    <h3><PiDogLight /> {item.nombre}</h3>
                                    <p>
                                        <PiMapPinLine /> {item.ubicacion}
                                    </p>
                                    <p><PiCalendarLight /> {item.edad}</p>
                                    <p>{item.caracter}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavbarLateral />
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default PetDetail
