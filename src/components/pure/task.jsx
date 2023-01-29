import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'


const TaskComponent = ({Task}) => {

    useEffect(() => {
        console.log('created task')
        return () => {
            console.log(`Task: ${Task.name} is going to `)
        };
    }, [Task]);


    return (
        <div>
            <h2 className='task-name'>
                Nombre: { Task.name }
            </h2>
            <h3>
                Descripcion: { Task.descripcion }
            </h3>
            <h4>
                Level: { Task.level }
            </h4>
            <h5>
                This task is: {Task.completed ? 'COMPLETED' : 'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task) //Con esto decimos que es una clase
};


export default TaskComponent;


