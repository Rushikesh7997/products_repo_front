import { GET_DATA } from "./actionTypes";

const initialState ={
    data : []
}

const reducer = (state = initialState,action)=>{
    const {type,payload} =action
    switch(type){
        case GET_DATA:{
            return {
                ...state,
                data:payload
            }
        }
        default: return state
    }
}

export {reducer}