import {createStore} from "redux";
import {reducer} from "./todos/store";

export const store = createStore(reducer);