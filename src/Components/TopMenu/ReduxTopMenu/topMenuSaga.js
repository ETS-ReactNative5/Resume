import { call, put, fork, take, all, takeEvery } from 'redux-saga/effects';
import { actionConstants } from '../../../types/actionConstants';
import * as actions from './topMenuAction';

function* changeValuePointer(action) {
  yield put(actions.changeValue(action.payload));
}

export default function* mySaga() {
  yield  takeEvery(actionConstants.TOP_MENU_VALUE_REQUEST, changeValuePointer);
}
