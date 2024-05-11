import { createStore } from "redux";

const initialState = {
    alias: ''
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_ALIAS':
            return {
                ...state,
                alias: action.payload
            };
            default:
                return state;
    }    
}


const store = createStore(userReducer);

export default store;