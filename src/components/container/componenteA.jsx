import React from 'react';

import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB'


const ComponenteA = (  ) => {
    const defaultContact = new Contacto('Iham', 'Vivanco', 'iham@gmail.com',true)

    return (
        <div>
            <h1>Tu Contacto:</h1>
            <ComponenteB Contacto={defaultContact}></ComponenteB>
        </div>
    );
};





export default ComponenteA;
