import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos de task.scss

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';



const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1',' description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2',' description 2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Example 3',' description 3', true, LEVELS.BLOQUEANTE)





    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false)
        return () => {
            console.log('Task List Component is going to unmount')
        };
    }, [tasks]);

    

    
    const changeCompleted = (id) => {
        
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/*Card header (titulo) */}
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    {/*Card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {tasks.map((task, index)=>{
                                    return(
                                        <TaskComponent key ={index} Task={tasks}></TaskComponent>
                                    )
                                })}


                               
                            </tbody>
                        </table>
                    </div>  

                </div>
                <TaskForm></TaskForm>
            </div>
            {/*TODO Aplicar un for/map para rendereizar una lista */}
            
        </div>
    );
};



export default TaskListComponent;
