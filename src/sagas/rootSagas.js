import { all, fork } from 'redux-saga/effects';
import sagaToDoList from '../Components/ToDoList/ReduxToDoList/sagaToDoList';

export default function* rootSaga() {
  yield all([
    fork(sagaToDoList),
  ]);
}
