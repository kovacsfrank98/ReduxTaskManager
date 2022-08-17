import './App.css';
import Tasks from './todos/todos';
import TaskForm from './todos/addtodo';
//import Contact from './contacts/contacts';
//import {Routes, Route, NavLink, useNavagate} from 'react-router-dom';

/*
function App() {
  return (
    <Routes>
        <Route index element={<TaskForm />} />
        <Route path="tasks" element={<Tasks />}/>
        <Route path="taskForm" element={<TaskForm />}/>
        <Route path="contact" element={<Contact />}/>
    </Routes>
  );  
  
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
*/

function App()
{
    return(
        <div>
        <TaskForm />
        <Tasks />
        </div>
    );
}

export default App;