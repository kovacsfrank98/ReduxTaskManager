import App from './App';
import ??? from './contacts/contacts';
import {NavLink} from 'react-router-dom';

function Header()
{
    return (
        <nav>
            <NavLink to="/tasks">App</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}