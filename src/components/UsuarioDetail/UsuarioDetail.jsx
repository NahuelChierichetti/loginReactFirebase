import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../credenciales';

const UsuarioDetail = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        const docRef = doc(db, "usuarios", id)
        getDoc(docRef)
            .then((response) => {
                console.log(
                    response
                )
                setItem(
                    {...response.data(), id: response.id}
                )
            })
    }, [id])

  return (
    <div>
        {item ? (
            <>
                <h2>{item.nombre}</h2>
                <h2>{item.email}</h2>
            </>
            ) : (
            <p>Cargando...</p>
            )}
    </div>
  )
}

export default UsuarioDetail
