import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
// redux configuration of the store with the reducers, thunk (middleware) and chrome web tools.
export const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a));

