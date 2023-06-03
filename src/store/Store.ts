import{createStore} from "redux";
import {reducer} from "./token/Reducer";

const store = createStore(reducer);

export default store;