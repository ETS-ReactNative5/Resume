import { combineReducers } from 'redux';
import reducerToDoList from '../Components/ToDoList/ReduxToDoList/reducerToDoList';


export const appReducer = combineReducers({
  toDoList: reducerToDoList
});

export default appReducer;
