import { createStore } from "redux";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    alias: '',
    token: '',
    app: '',
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_ALIAS':
            return {
                ...state,
                alias: action.payload.alias,
                token: action.payload.token,
                app: action.payload.app
            };
            default:
                return state;
        
    }    
};

const persistConfig = {
    key: 'root',
    storage
}

const persistReduc = persistReducer(persistConfig, userReducer);


const store = createStore(persistReduc);
const persistor = persistStore(store);

export {store, persistor};