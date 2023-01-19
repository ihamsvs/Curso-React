import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'


const TaskComponent = ({Task}) => {
    return (
        <div>
            <h2>
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


