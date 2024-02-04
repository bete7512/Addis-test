import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchStatisticsFailure,fetchStatisticsSuccess,startFetchStatistics } from "./stateSlice";
import axios from "axios";
import Statistics from '../../components/Statistics';

function* fetchStatisticsHandler(action: ReturnType<typeof startFetchStatistics>) {
  try {

    const apiUrl = `http://localhost:3600/api/v1/analytics`;

    const { data } = yield call(axios.get, apiUrl);
    yield put(fetchStatisticsSuccess(data));
  } catch (error: any) {
    yield put(fetchStatisticsFailure(String(error.message)));
  }
}



function* fetchStatisticsSaga() {
  yield takeLatest("Statistics/startFetchStatistics", fetchStatisticsHandler);
}



export {  fetchStatisticsSaga };
