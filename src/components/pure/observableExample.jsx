import React from 'react';
import { getNumbers } from '../../services/observableServices';
import { useState } from 'react';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(NewNumber){
                    console.log('New Number: ', NewNumber)
                    setNumber(NewNumber)
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in observable')
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable')
                }
            }
        )
        console.log('Finished receiveng numbers')
    }

    return (
        <div>
            <h2> Number: {number} </h2>
            <button onClick={obtainNewNumbers}> Obtain new numbers </button>
        </div>
    );
}

export default ObservableExample;
