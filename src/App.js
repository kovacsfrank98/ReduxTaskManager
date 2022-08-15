import './App.css';
import Header from './header';
import Tasks from './todos/todos';
import TaskForm from './todos/addtodo';

function App() {
  return (
    <Header />
    <div className="App"> 
        <TaskForm />
        <Tasks />
    </div>
  );
}

export default App;
