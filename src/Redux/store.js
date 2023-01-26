import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const reducers = combineReducers({ reducer });
const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
