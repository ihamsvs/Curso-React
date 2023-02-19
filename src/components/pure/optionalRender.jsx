import React, {useState} from 'react';

const OptionalRender = () => {

    let red = 0
    let green = 200
    let blue = 150


     // ? Estilo para usuario logueado
     const loggedStyle = {
        backgroundColor:`rgb(${red}, ${green}, ${blue})`,
        color: 'white'
    }

    //? Estilo para usuario no logueado
    const unLoggedStyle = {
        backgroundColor: 'tomato',
        color: 'white'
    }


    // Login / Logout buttons

    const LoginButton = ({loginAction, propsStyle}) =>{
        return (
            <button style={propsStyle} onClick={loginAction}>Login</button>
        )
    }
    const LogoutnButton = ({logoutAction, propsStyle}) =>{
        return (
            <button style={propsStyle} onClick={logoutAction}>Logout</button>
        )
    }

    //? expresión true && expresión => se renderiza la expresion
    //? expresión false && expresión => no se renderiza la expresion

   




    const [access, setAcess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    const updateAccess = () =>{
        setAcess(!access)
    }

    const loginAction = () =>{
        setAcess(false)
    }

    const logoutAction = () => {
        setAcess(true)
    }

    let optionalbutton;

    if(access){
        optionalbutton = <LoginButton propsStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }else{
        optionalbutton = <LogoutnButton propsStyle={ unLoggedStyle } logoutAction={logoutAction}></LogoutnButton>
    }

    // Unread messages
    let addMessages = () =>{
        setNMessage(nMessage + 1)
    }


    return (
        <div>
        {/*Option Button */}
        {optionalbutton}
        {/* N messages unread */}
        
        {/* Operador Ternario */}

                {access ? (
                    <div>
                        { nMessage > 0 ?
                        <p>You have {nMessage} new messages {nMessage > 1 ? 's' : null}...</p> : 
                        <p>There are no new message</p>
                        }
                        <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message' : 'Add new message'}</button>
                    </div>) : null }  
                






        </div>
    );
}

export default OptionalRender;
