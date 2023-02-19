import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

//Importamos la hoja de estilos de task.scss

import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example 1",
    " description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example 2",
    " description 2",
    false,
    LEVELS.URGENTE
  );
  const defaultTask3 = new Task(
    "Example 3",
    " description 3",
    true,
    LEVELS.BLOQUEANTE
  );

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("Task List Component is going to unmount");
    };
  }, [tasks]);

  function completeTask(Task) {
    console.log("Complete this Task: ", Task);
    const index = tasks.indexOf(Task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;

    //We update the state of the componenet and it will update the Iteration fo the tasks in order to show the
    //Task updated
    setTasks(tempTasks);
  }

  function deleteTask(Task) {
    console.log("Delete this Task: ", Task);
    const index = tasks.indexOf(Task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(Task) {
    console.log("Delete this Task: ", Task);
    const tempTasks = [...tasks];
    tempTasks.push(tasks);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((tasks, index) => {
            return (
              <TaskComponent
                key={index}
                Task={tasks}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;

  if(tasks.length > 0){
    tasksTable = <Table></Table>
  }else{
    tasksTable =(<div><h3> There are no tasks to show</h3>
    <h4>Please, create one</h4></div>) 
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/*Card header (titulo) */}
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/*Card body (content) */}
          <div
            className="card-body "
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px", 'color': 'black' }}
          >
            {loading ? (<p>Loading task</p>) : tasksTable }
          </div>
        </div>
      </div>
      <TaskForm add={addTask} lenght={Task.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
