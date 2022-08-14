import {ADD_TASK} from "./todos/action";

const initialState ={
    tasks: ["Fill up the car.", "Go grocery shopping.", "Pick up dry cleaning."]
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        default:
            return state;
    }  
};