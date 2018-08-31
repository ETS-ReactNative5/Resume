import { call, put, fork, take, all, takeEvery } from 'redux-saga/effects';
import * as actions from './walkingAction';
import { actionConstants } from '../../../types/actionConstants';

function* changeimage0Pointer(action) {
  yield put(actions.changeImage0(action.payload));
}

export default function* mySaga() {
  yield takeEvery(actionConstants.WALKING_FIGURE_GET_IMG0, changeimage0Pointer);
}
