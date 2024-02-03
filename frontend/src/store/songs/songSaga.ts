import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  addSongFailure,
  addSongSuccess,
  fetchSongsFailure,
  fetchSongsSuccess,
  fetchSongsStart,
  removeSongFailure,
  removeSongSuccess,
} from "./songSlice";
import axios from "axios";

function* fetchSongsHandler() {
  try {
    const { data } = yield call(axios.get, "/songs");
    yield put(fetchSongsSuccess(data));
  } catch (error: any) {
    yield put(fetchSongsFailure(String(error.message)));
  }
}

function* addSongHandler(action: ReturnType<typeof addSongSuccess>) {
  try {
    const { data } = yield call(axios.post, "/songs", action.payload);
    yield put(addSongSuccess(data));
  } catch (error: any) {
    yield put(addSongFailure(String(error.message)));
  }
}

function* removeSongHandler(action: ReturnType<typeof removeSongSuccess>) {
  try {
    yield call(axios.delete, `/songs/${action.payload}`);
    yield put(removeSongSuccess(action.payload));
  } catch (error: any) {
    yield put(removeSongFailure(String(error.message)));
  }
}

export function* songSaga() {
  yield all([
    takeLatest(fetchSongsStart, fetchSongsHandler),
    takeLatest(addSongSuccess, addSongHandler),
    takeLatest(removeSongSuccess, removeSongHandler),
  ]);
}
