import { put, takeEvery } from 'redux-saga/effects';
import { topMenuConstants } from '../../../types/topMenuConstants';
import * as actions from './topMenuAction';

function* changeValuePointer(action) {
  yield put(actions.changeValueAction(action.payload));
}

export default function* mySaga() {
  yield  takeEvery(topMenuConstants.TOP_MENU_VALUE_REQUEST, changeValuePointer);
}
