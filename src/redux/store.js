import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    cart: cartReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));


export default store;