import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/Ejercicios/Clock';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        {/*Componente propio Greeting.jsx -> Asi se comenta en React*/}

        {/* <Greeting name="Iham"></Greeting> / Asi le paso la informacion al props de Greeting*/}

        {/* Componente de ejemplo funcional */}
        {/*<GreetingF name = "Iham"></GreetingF> */}

        {/* Componente de listado de tarea */}
        <TaskListComponent></TaskListComponent> 
        {/* <ComponenteA></ComponenteA> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/*Todo lo que hay aqui, es tratado como props.children */}
        {/*
        <Ejemplo4 nombre="Iham"> 
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        
          
        

        
        
        
        
        
      </header>
    </div>
  );
}

export default App;
