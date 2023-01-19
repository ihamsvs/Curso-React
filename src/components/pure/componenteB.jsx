import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({Contacto}) => {
    
    
    return (
        <div>
        <h1>Nombre: { Contacto.nombre}</h1>
        <h1>Apellido: { Contacto.apellido}</h1>
        <h1>email: { Contacto.email}</h1>
        <h1>conectado: { Contacto.conectado ? 'Contacto en linea' : 'Contacto no disponible'}</h1>
        </div>
    );

    
};


ComponenteB.propTypes = {
    Contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
