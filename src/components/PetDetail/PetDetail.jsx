import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../credenciales'

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
                    <h2>{item.nombre}</h2>
                    <h2>{item.edad}</h2>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default PetDetail
