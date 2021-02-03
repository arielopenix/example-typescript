import {createStore} from 'redux';
//import {rootReducer} from './reducers/rootReducer';
import { noteReducer } from './reducers/noteReducer'

//export const store = createStore(rootReducer)
export const store = createStore(noteReducer)
