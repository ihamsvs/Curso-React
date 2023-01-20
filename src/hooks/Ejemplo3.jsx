/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1 dispone de un contexto qe¿ue va a tener un valor que recibe desde el padre
 * 
 */
const miContexto = React.createContext(null)


const Componente1 = () => {

    //Inicializamos nu estado vacio que va arellenarse con los datos del padre
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    //Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        sessionData({
            token: 'asdsfg123456789',
            sesion: sessionData.session + 1
        })
        
    }

    return(
        <div>
            <miContexto.Provider value={sessionData}>
                {/*Todo lo que este aqui dentro puede leer los datos de sessionData */}
                {/* Ademas, si se actualiza, los componentes de aqui, tambien se actualizara */}
                <h1>*** Ejemplo de useState y useContext() ***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesión</button>

            </miContexto.Provider>
        </div>

    )
}




