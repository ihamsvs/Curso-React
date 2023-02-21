import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const navigate = useNavigate()
    console.log('We are in Route:', location.pathname)

    const navigat = (path) =>{
        navigate(path)
    }

    const goBack = () =>{
        navigate('/')
    }

    

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={()=>navigat('/')}>
                    Go To Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
