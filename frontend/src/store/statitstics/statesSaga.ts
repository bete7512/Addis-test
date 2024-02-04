import { call, put, takeLatest } from "redux-saga/effects";
import { fetchStatisticsFailure, fetchStatisticsSuccess } from "./stateSlice";
import axios from "axios";

function* fetchStatisticsHandler() {
  try {
    const apiUrl = `https://addis-software-song-api.onrender.com/api/v1/analytics`;
    const { data } = yield call(axios.get, apiUrl);
    console.log("this is data", data)
    yield put(fetchStatisticsSuccess(data));
  } catch (error: any) {
    yield put(fetchStatisticsFailure(String(error.message)));
  }
}

function* fetchStatisticsSaga() {
  yield takeLatest("statistics/startFetchStatistics", fetchStatisticsHandler);
}

export { fetchStatisticsSaga };
