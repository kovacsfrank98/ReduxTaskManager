import React from "react";
import {connect} from "react-redux";
import {addTask} from "./todos/action";

const TaskForm = ({dispatch}) => {
    let input;
    
    return(
        <div>
            <h1>Task Form</h1>
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch(addTask(input.value));
                input.value = "";
            }}
        >
            <input ref={node => (input = node)} />
            <button type="submit">ADD TASK</button>
        </form>
        </div>
    );
};

export default connect()(TaskForm);