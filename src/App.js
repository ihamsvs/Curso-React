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
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/observableExample';
import FetchExample from './components/pure/fetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCrudExample from './components/pure/AxiosCrudExample';



function App() {
  return (
    <div className="">
      <header className="">
        
        
        {/*Componente propio Greeting.jsx -> Asi se comenta en React*/}

        {/* <Greeting name="Iham"></Greeting> / Asi le paso la informacion al props de Greeting*/}

        {/* Componente de ejemplo funcional */}
        {/*<GreetingF name = "Iham"></GreetingF> */}

        {/* Componente de listado de tarea */}
        
         
         
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

        {/* Gestión de eventos */}
        {/*  <Father></Father> */}
        
        
      {/* Ejemplos de renderizado condicional */}


      {/*Ejemplo de usos de Formik y yup */}

      
      {/* Ejemplo de procesos asincronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      
       <AxiosCrudExample></AxiosCrudExample>

        
        
        
        
        
      </header>
    </div>
  );
}

export default App;
