import {createStore, combineReducers} from 'redux';
import {tasks, visibilityFilter} from './reducers';

export default createStore(combineReducers({tasks, visibilityFilter}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())