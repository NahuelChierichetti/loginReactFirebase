import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import { db } from '../../credenciales';
import { Link } from 'react-router-dom';
import './Usuarios.css'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        email: '',
        telefono: '',
        pais: '',
        posicion: '',
        linkedin: ''
    });

    useEffect(() => {
        const obtenerUsuarios = async () => {
            const usuariosRef = collection(db, "usuarios");
            const usuariosSnapshot = await getDocs(usuariosRef);
            const listaUsuarios = usuariosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUsuarios(listaUsuarios);
        };
        obtenerUsuarios();
    }, []);

    const abrirFormulario = () => {
        setMostrarFormulario(true);
    };

    const cerrarFormulario = () => {
        setMostrarFormulario(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "usuarios"), nuevoUsuario);
            setNuevoUsuario({
                nombre: '',
                email: '',
                telefono: '',
                pais: '',
                posicion: '',
                linkedin: ''
            });

            const usuariosRef = collection(db, "usuarios");
            const usuariosSnapshot = await getDocs(usuariosRef);
            const listaUsuarios = usuariosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUsuarios(listaUsuarios);
            cerrarFormulario();
        } catch (error) {
            console.error('Error al crear el usuario:', error);
        }
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-4">
                        <h2>Usuarios</h2>
                    </div>
                    <div className="col-8 text-end">
                        <button onClick={abrirFormulario}>Crear usuario</button>
                    </div>
                </div>
                {mostrarFormulario && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={cerrarFormulario}>&times;</span>
                            <h2>Crear usuario</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="nombre" value={nuevoUsuario.nombre} onChange={handleChange} placeholder="Nombre" required />
                                <input type="email" name="email" value={nuevoUsuario.email} onChange={handleChange} placeholder="Email" required />
                                <input type="tel" name="telefono" value={nuevoUsuario.telefono} onChange={handleChange} placeholder="Teléfono" required />
                                <input type="text" name="pais" value={nuevoUsuario.pais} onChange={handleChange} placeholder="País" required />
                                <input type="text" name="posicion" value={nuevoUsuario.posicion} onChange={handleChange} placeholder="Posición" required />
                                <input type="url" name="linkedin" value={nuevoUsuario.linkedin} onChange={handleChange} placeholder="LinkedIn" required />
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={cerrarFormulario}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">País</th>
                                    <th scope="col">Puesto</th>
                                    <th scope="col">LinkedIn</th>
                                    <th scope="col">Perfil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>{usuario.pais}</td>
                                        <td>{usuario.posicion}</td>
                                        <td>
                                            <Link to={usuario.linkedin} target="_blank" rel="noopener noreferrer">Ir al perfil</Link>
                                        </td>
                                        <td>
                                            <button>
                                                <Link to={`/usuario/${usuario.id}`} className="card-btn">Más información</Link>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;