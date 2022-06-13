import { applyMiddleware, combineReducers, createStore } from "redux";
//middleware saga
import createSagaMiddleware from "redux-saga";
import { UserLoginCyberBugsReducer } from "./reducers/UserLoginCyberBugsReducer";
import { HistoryReducer } from "./reducers/HistoryReducer";
import { rootSaga } from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

//cấu hình Store
const rootReducer = combineReducers({
    //reducer
    UserLoginCyberBugsReducer,
    HistoryReducer
});
//Khởi tạo store
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
//Gọi saga
sagaMiddleware.run(rootSaga);

export default store;
