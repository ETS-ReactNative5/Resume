import { all, fork } from 'redux-saga/effects';
import sagaToDoList from '../Components/ToDoList/ReduxToDoList/sagaToDoList';
import sagaTopMenu from '../Components/TopMenu/ReduxTopMenu/topMenuSaga';

export default function* rootSaga() {
  yield all([
    fork(sagaToDoList),
    fork(sagaTopMenu),
  ]);
}
