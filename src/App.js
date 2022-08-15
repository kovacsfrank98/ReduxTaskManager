import './App.css';
import Header from './header';
import Tasks from './todos/todos';
import TaskForm from './todos/addtodo';
import Contact from './contacts/contacts';
import {Routes, Route, NavLink, useNavagate} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
        <nav>
            <NavLink to="/tasks">App</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <TaskForm />
        <Tasks />
    </div>
  );
}

export default App;