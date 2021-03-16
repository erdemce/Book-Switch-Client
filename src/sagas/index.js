import { fork, all, call, put, takeLatest, delay } from "redux-saga/effects";
import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from "../actions";
import {getData} from "../utils/api"

function* getBooks() {

  try {
    const response = yield call(getData,{url:"/book"});
  

    yield delay(500);
    yield put(GET_BOOKS_SUCCESS(response));
  } catch (error) {
    yield put(GET_BOOKS_FAILURE({ error }));
  }
}

// Watch sagas
function* watchGetBooks() {
  yield takeLatest(GET_BOOKS, getBooks);
}
// Root saga
export function* rootSaga() {
  yield all([fork(watchGetBooks)]);
}