import React, {useState, useEffect} from 'react';
import {getRandomUser} from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getRandomUser()
        .then((response) => {
            console.log(response)
        })
        .catch((error)=>alert(`Somethin went wrong ${error}`))
        
    }, []);


    return (
        <div>
            <h1>Axios Example</h1>
            { user != null}
        </div>
    );
}

export default AxiosExample;
