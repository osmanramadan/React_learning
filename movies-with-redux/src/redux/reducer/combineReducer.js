import {combineReducers } from 'redux';
import  {detailsReducer} from './detailsReducer';
import {moviesReducer} from './movieReducer';



export const combineReducer= combineReducers({
movieDetails:detailsReducer,
movies:moviesReducer,
})