import React,{useState} from 'react';
import PropTypes from 'prop-types';

//Hace referencia a las propiedades que le van a pasar
const GreetingF = (props) => {

    // Breve introduccion a useState 
    // const [variable, metodo para actualizarla] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () =>{
        //Actualizamos el State
        setage(age + 1)
    }

    const descontar = () =>{
        setage(age - 1)
    }

    return (
        <div>
            <h1>
                ¡Hola {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
            <div>
                <button onClick={descontar}>
                    Descontar años
                </button>
            </div>               
               
                
               
        </div>
    );
};


GreetingF.propTypes = {

    name: PropTypes.string,
};


export default GreetingF;


