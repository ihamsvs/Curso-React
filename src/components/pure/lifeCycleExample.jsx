/**
 * 
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componentes, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: si va a recibit nuevos props')
    }

    shouldComponentUpdate(nextProps, nextState){    
        /**
         * Controlar el componente si debe o no actualizarse
         */
        // return true
    }
    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo despues de actualizarse')
    }
    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desparecer')
    }
    
    




    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
