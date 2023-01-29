import React, {useState} from 'react';
//Definiendo estilos en constantes
const loggedStyle = {
    color: 'white',
    fontWeight: 'bold'
};

//? Estilo para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);
    const greetingUser = (<p>Hola, {props.name}</p>)
    const pleaseLogin = (<p>Please Login</p>)


    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ? (<p>Hola, {props.name}</p>)
             :
            (<p>Please login</p>)}
            
            <button onClick={()=>{
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
