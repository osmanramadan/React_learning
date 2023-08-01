import { createStore, applyMiddleware} from "redux";
import { combineReducer } from '../reducer/combineReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk from 'redux-thunk'

//1-create store
export const store = 
createStore(combineReducer,composeWithDevTools(applyMiddleware(thunk)));

