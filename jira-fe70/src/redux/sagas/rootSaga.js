import {all} from 'redux-saga/effects';
import * as Cyberbugs from './Cyberbugs/UserCyberbugsSaga'

export function* rootSaga() {
    //Nghiệp vụ theo dõi các action saga
  yield all([

    //Nghiệp vụ cyberbugs...
    Cyberbugs.theoDoiSignin()
  ])
}
