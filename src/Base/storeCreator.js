import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginReducer from '../Reducers/main.js';

export const store = createStore(
    loginReducer,
    applyMiddleware(thunkMiddleware)
);
