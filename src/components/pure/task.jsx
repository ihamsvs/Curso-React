import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import 'bootstrap/dist/css/bootstrap.min.css';


//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({Task, complete, remove}) => {

    useEffect(() => {
        console.log('created task')
        return () => {
            console.log(`Task: ${Task.name} is going to `)
        };
    }, [Task]);

    //Function that returns a badge
    //depending on the level of the task

    function taskLevelBadge(){
        switch (Task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='bi bi-cloud-drizzle-fill'>{Task.level}</span>
                </h6>)
                break;
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'>
                    <span className='bi bi-clouds-fill bg-warning'>{Task.level}</span>
                </h6>)
                break;    
            case LEVELS.BLOQUEANTE:
                return(<h6 className='mb-0'>
                    <span className='bi bi-cloud-moon-fill bg-danger'>{Task.level}</span>
                </h6>)
                break;
            default:
                break;
        }
    }
    /**
     * Se vuelve una funcion anonima para que funcione cuando le demos click y no antes
     * @returns Function that returns of depending 
     */

    function taskIconCompleted(){
        if(Task.completed){
            return(<i onClick={()=>complete(Task)} className='bi bi-check2-circle task-action' style={{color: 'green', fontWeight:'bold'}}></i>)    
        }else{
            return(<i onClick={()=>complete(Task)} className='bi bi-emoji-angry-fill task-action' style={{color: 'red', fontWeight:'bold'}}></i>)
        }
    }

    const taskCompleted = {
        
        color: 'gray',
        textDecoration: 'line-trough'
    }
    const taskPending = {
        backgroundColor: 'tomato',
        color: 'gray',
        textDecoration: 'line-trough',
        fontWeight: 'bold'
    }



    return (
        
        <tr className='fw-normal' style={Task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{Task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{Task.description}</span>
            </td>
            <td className='align-middle'>
                {/*EXECUTION OF FUNCTION TO RETURN BADGE ELEMENT */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO SUSTITUIR POR ICONOS */}
                {taskIconCompleted()}
                <i className='bi bi-trash-fill task-action' style={{color: 'tomato',}} onClick={()=> remove(Task)}></i>
            </td>

        </tr>

        
        
        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired, //Con esto decimos que es una clase
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;


