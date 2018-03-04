import {put, takeLatest} from 'redux-saga/effects';
import {changeRoot} from './../actions';
import {ROOT_CHANGE_REQUEST} from './../constants/action-types';
import screensConfig from './../constants/screens';

function* pushScreen(action) {
  const {root, navigator} = action;

  yield navigator.toggleDrawer({
    side: 'left',
    animated: true
  });
  yield navigator.push(screensConfig[root]);
  yield put(changeRoot(root));
}

function* WatchPushScreen() {
  yield takeLatest(ROOT_CHANGE_REQUEST, pushScreen);
}

export default WatchPushScreen;