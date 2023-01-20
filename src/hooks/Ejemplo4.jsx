/**
 *  Ejemplo para entedner el uso de props.children
 * 
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de children props ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecti aquello que se encuentre entre las etiquetas
            de apertura y cierre que este componetne desde el componente de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
