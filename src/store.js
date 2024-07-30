import incrementReducer from "./reducer/index";
import {createStore} from "redux";

const store =createStore(incrementReducer);

export default store;




