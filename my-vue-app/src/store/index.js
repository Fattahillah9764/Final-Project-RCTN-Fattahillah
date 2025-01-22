import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
    dataMovies: [],
    dataCoba: "Aku terpanggil"
}

const reducer = (state = initialState, action) => {
    console.log(action);
    
    switch (action.type) {
        
        case "CHANGE_DATA_MOVIE":
            return { ...state, dataMovies: action.payload }  
               
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store