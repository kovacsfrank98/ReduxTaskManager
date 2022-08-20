import './App.css';
import List from './todos/todoList';
import Contact from './contacts/contacts';
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="navBar">
      <div className="navDiv">
        <NavLink to="/" 
        style={({isActive}) => ({color: isActive ? 'lightblue' : 'white'})}
        >To-Do List</NavLink>
      </div>
      <div className="navDiv">
        <NavLink to="/contact"
        style={({isActive}) => ({color: isActive ? 'lightblue' : 'white'})}
        >Contact</NavLink>
      </div>
      </div>
    <Routes>
        <Route exact path="/" element={<List />}/>
        <Route exact path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;