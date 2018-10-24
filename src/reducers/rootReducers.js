import { combineReducers } from 'redux';
import reducerToDoList from '../Components/ToDoList/ReduxToDoList/reducerToDoList';
import topMenuReducer from '../Components/TopMenu/ReduxTopMenu/topMenuReducer';


export const appReducer = combineReducers({
  toDoList: reducerToDoList,
  topMenu: topMenuReducer,
});

export default appReducer;
