/**
 * Ejemplo de uso de los sgtes hooks de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    // cada uno en un estado diferente

    const [contador1,setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear un referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente

    const miRef = useRef() 

    function incrementar1(){
        setContador1(contador1 + 1)
    }
    function incrementar2 (){
        setContador2(contador2 + 1)
    }
    /**
     * Trabajando con UseEffect
     */

    /**
     *  ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componetne
     * se ejecuta aquello que esté dentro del useEffect()
     */

    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //    console.log('Mostrando referencia a elemento del DOM:')
    //    console.log(miRef)
    //});

    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habrá ejecución
     */

    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1')
    //    console.log('Mostrando referencia a elemento del DOM:')
    //    console.log(miRef)    
    //}, [contador1]);

     /**
     * ? Caso 2: Ejecutar solo cuando cambie contador1 o contador 2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */
    useEffect(() => {
            console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2')
           console.log('Mostrando referencia a elemento del DOM:')
            console.log(miRef)    
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado 
            </h4>
            <div>
            {/* Botones para cambiar los contadores */}
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
