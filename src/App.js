import './App.css';
import Tasks from './todos/todos';
import TaskForm from './todos/addtodo';

function App() {
  return (
    <div className="App"> 
        <TaskForm />
        <Tasks />
    </div>
  );
}

export default App;
