/**
 * Ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado 
 * a través de un hook y además poder modificarlo 
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador

    const valorInicial = 0;

    // Valor inicial para una persona
    

    const personaInicial = {
        nombre : 'iham',
        email : 'iham@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setcontador] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ? FuncionarParaCambiar(nuevoValor)
        setcontador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setPersona({
            nombre: 'Pia',
            email: 'Pia@gmail.com'
        })
    }

    

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}> Incrementar contador</button>
                <button onClick={actualizarPersona}>actualizar persona</button>
            </div>


        </div>
    );
}

export default Ejemplo1;
