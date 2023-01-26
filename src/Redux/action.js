import { GET_DATA } from "./actionTypes";

const displayNames = (names)=>(dispatch)=>{
    dispatch({ type:GET_DATA, payload:names });
}

export default displayNames;