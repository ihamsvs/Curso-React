import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({user}) => {
    
    const history = useNavigate()
    
    const goBack = (path) =>{
        history(path)
    }

    const navigateTo = (path) =>{
        history(path)
    }

    return (
        <div>
            <h1>Your Profiles</h1>
            <button onClick={()=>{
                navigateTo('/task')
            }}>
                Tasks
            </button>
            <button onClick={()=>{
                goBack('/')
            }}>Go home</button>
        </div>
    );
}

export default ProfilePage;
