import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const HomePage = () => {

    const location = useLocation()
    const navigate = useNavigate()


    const about = (path)=>{
        navigate('/about')
    }

    const home = () =>{
        navigate('/')
    }

    const profile = (path) =>{
        navigate('/profile')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>{
                about('/')
            }}>
                Go About
            </button>
            <button onClick={()=>{
                home('/')
            }}>
                Go Back
            </button>
            <button onClick={()=>{
                navigate('profile')
            }}>Go To Profile</button>
        </div>
    );
}

export default HomePage;
