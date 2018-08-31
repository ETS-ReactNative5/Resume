import { all, fork } from 'redux-saga/effects';
import walkingSaga from '../Animations/Walking/redux/walkingSaga';

export default function* rootSaga() {
  yield all([
    fork(walkingSaga),
  ]);
}
