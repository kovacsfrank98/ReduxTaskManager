import '../App.css';
import Todos from './todos';
import AddTodo from './addtodo';

function List()
{
    return(
        <div>
        <h1 className="banner">To-Do List</h1>
        <AddTodo />
        <Todos />
        </div>
    );
}

export default List;