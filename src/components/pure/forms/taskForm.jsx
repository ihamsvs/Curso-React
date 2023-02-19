import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import '../../../styles/task.scss'

const TaskForm = ({add, lenght}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e){
        e.preventDefault()
        const newTask = new Task(nameRef.current.value, 
            descriptionRef.current.value,
            false,
            levelRef.current.value);

            add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentlStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill letter-black'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name'></input>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description' ></input>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        NORMAL
                    </option>
                    <option style={urgentlStyle} value={LEVELS.URGENTE}>
                        URGENTE
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOQUEANTE}>
                       BLOQUEANTE
                    </option>
                    
                </select>

            </div>
            <button type='submit' className='btn btn-success btn-lg ms-3'>
            {lenght > 0 ? 'Add new task' : 'Create your first Task'}
            </button>
        </form>
    );
}


TaskForm.prototypes = {
    add: PropTypes.func.isRequired,
    lenght: PropTypes.number.isRequired
}

export default TaskForm;
