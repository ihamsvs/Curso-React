import React, { Component } from 'react';
import PropTypes from 'prop-types';

 

class Greeting extends Component {

    //Propiedas propias del componente
    constructor(props){
        super(props); //Informacion que va a pasar por atributos
        this.state = {
            //Informacion privada del componente para que pueda gestionarse, el state es inmutable y privado
            age: 21
        } 
    }


    render() {
        return (
            <div>
               <h1>
                !Hola {this.props.name}¡ {/*Accediento a las props */}
               </h1>
               <h2>
                Tu edad es de: {this.state.age} {/*Accediento al state*/} años
               </h2> 
               <div>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>
               </div>
               <div>
                <button onClick={this.descontar}>
                    Descontar años
                </button>
               </div>
            </div>
        );
    }

    //Con setState podemos modificar el this.state
    birthday = () => {
        this.setState((prevState) => ({
            age: prevState.age +1
        }))
    }

    descontar = () => {
        this.setState((prevState) =>({
            age: prevState.age -1
        }))
    }
}


//Contenido que yo le puedo pasar a un componente
//Esto es para poder un tipado fuerte en js
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
