import React,{useEffect, useState} from 'react';

const Clock = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Iham ',
        apellidos:'Vivanco Sagredo'
    };

    const [usuario, setUsuario] = useState(defaultState);

    useEffect(() => {
        const interval = setInterval(() => {
            Actualizacion()
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    });

    const Actualizacion = () => {
        return setUsuario({
            fecha: usuario.fecha,
            edad: usuario.edad + 1,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos
        })
    };


    return (
        <div>
            <h2>
                Hora actual:
                {usuario.fecha.toLocaleDateString()}
            </h2>
            <h3>
                {usuario.nombre} , {usuario.apellidos}
            </h3>
            <h1>
                Edad: {usuario.edad}
            </h1>
        </div>
    );
}

export default Clock;