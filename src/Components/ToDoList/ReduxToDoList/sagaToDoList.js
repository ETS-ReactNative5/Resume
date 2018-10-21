import { call, put, fork, take, all, takeEvery } from 'redux-saga/effects';
import { actionConstants } from '../../../types/actionConstants';
import * as actions from './actionToDoList';

function* changeTextPointer(action) {
  yield put(actions.changeToDoText(action.payload));
}

function* changeToDoPointer(action) {
  yield put(actions.changeToDo(action.payload));
}

export default function* mySaga() {
  yield takeEvery(actionConstants.TODO_TEXT_REQUEST, changeTextPointer);
  yield  takeEvery(actionConstants.TODO_TODO_REQUEST, changeToDoPointer)
}
