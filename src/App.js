import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*Componente propio Greeting.jsx -> Asi se comenta en React*/}

        {/* <Greeting name="Iham"></Greeting> / Asi le paso la informacion al props de Greeting*/}

        {/* Componente de ejemplo funcional */}
        {/*<GreetingF name = "Iham"></GreetingF> */}

        {/* Componente de listado de tarea */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
        
        
        
      </header>
    </div>
  );
}

export default App;
