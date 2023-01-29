/**
 * Ejemplo de uso del método componentWillUnMount para componente clase
 * 
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes del componente desaparezca')
    }

  render() {
    return (
      <div>
        <h1>componentWillUnMount</h1>
      </div>
    )
  }
}



export const WillUnMountHook = () => {

    useEffect(() => {
        // Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes del componente desaparezca')
        };
    }, []); // Dejar el array vacio es para que se ejecute una vez

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}

