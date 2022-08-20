import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from './todosSlice';

export default function Todo(props) {
    const {todo} = props;
    const dispatch = useDispatch();
    
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);
    
    const saveTodo = () => {
        const payload = {
        id: todo.id,
        text: editValue,
    };
    dispatch(updateTodo(payload));
    cancelEdit();
    };
    
    const cancelEdit = () => {
        setIsEdit(false);
    };
    
    return isEdit ? (
        <form onSubmit={saveTodo}>
            <li className="finished">{editValue}</li>
        </form>
    ) : (
        <>
            <span>{todo.text}</span>
            <button onClick={() => setIsEdit(!isEdit)}>Done</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>
    );
}