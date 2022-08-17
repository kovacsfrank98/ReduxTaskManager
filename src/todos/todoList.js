import '../App.css';
import Tasks from './todos';
import TaskForm from './addtodo';

function List()
{
    return(
        <div>
        <TaskForm />
        <Tasks />
        </div>
    );
}

export default List;