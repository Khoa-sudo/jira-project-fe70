import React from "react";
import {
  call,
  delay,
  fork,
  take,
  takeEvery,
  takeLatest,
  put,
  select,
} from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { TOKEN, USER_LOGIN } from "../../../util/constants/settingSystem";
import { USER_SIGNIN_API, USLOGIN } from "../../constants/Cyberbugs/Cyberbugs";

//quản lý các action saga
function* signinSaga(action) {
  //Gọi api
  try {
    const { data, status } = yield call(() =>
      cyberbugsService.signinCyberBugs(action.userLogin)
    );
    //Lưu vào localStorage khi đăng nhập thành công
    localStorage.setItem(TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
    
    yield put({
      type:USLOGIN,
      userLogin:data.content
    })
    
    let history = yield select(state=>state.HistoryReducer.history)
    history.push('/home')
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}
