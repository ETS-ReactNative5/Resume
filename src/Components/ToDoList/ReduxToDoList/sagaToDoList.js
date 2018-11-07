import { put, takeEvery } from 'redux-saga/effects';
import { actionConstants } from '../../../types/actionConstants';
import * as actions from './actionToDoList';

function* changeTextPointer(action) {
  yield put(actions.changeToDoText(action.payload));
}

function* changeToDoPointer(action) {
  yield put(actions.changeToDo(action.payload));
}

function* changeToDoStatePointer(action) {
  yield put(actions.changeToDoState(action.payload));
}

function* deleteToDoPointer(action) {
  yield put(actions.deleteToDo(action.payload));
}


export default function* mySaga() {
  yield takeEvery(actionConstants.TODO_TEXT_REQUEST, changeTextPointer);
  yield  takeEvery(actionConstants.TODO_TODO_REQUEST, changeToDoPointer);
  yield  takeEvery(actionConstants.TODO_ALTER_STATE_REQUEST, changeToDoStatePointer);
  yield  takeEvery(actionConstants.TODO_DELETE_REQUEST, deleteToDoPointer);
}
