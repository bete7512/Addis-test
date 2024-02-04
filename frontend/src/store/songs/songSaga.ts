import {  call, put, takeLatest } from "redux-saga/effects";
import {
  addSongFailure,
  addSong,
  addSongSuccess,
  fetchSongs,
  fetchSongsFailure,
  removeSongFailure,
  removeSongSuccess,
  updateSongFailure,
  updateSongSuccess,
  fetchSongsStart,
} from "./songSlice";
import axios from "axios";
import { startFetchStatistics } from "../statitstics/stateSlice";

function* fetchSongsHandler(action: ReturnType<typeof fetchSongsStart>) {
  try {
    const { page, pageSize, searchQuery } = action.payload;

    // Construct the API URL with pagination and search parameters
    const apiUrl = `http://localhost:3600/api/v1/songs?page=${page}&pageSize=${pageSize}&search=${searchQuery}`;

    const { data } = yield call(axios.get, apiUrl);
    yield put(fetchSongs(data));
  } catch (error: any) {
    yield put(fetchSongsFailure(String(error.message)));
  }
}

function* addSongHandler(action: ReturnType<typeof addSong>) {
  try {
    const { data } = yield call(
      axios.post,
      "http://localhost:3600/api/v1/songs",
      action.payload
    );
    yield put(addSongSuccess(data));
    yield put(startFetchStatistics())
  } catch (error: any) {
    yield put(addSongFailure(String(error.message)));
  }
}

function* updateSongHandler(action: ReturnType<typeof updateSongSuccess>) {
  try {
    const { data } = yield call(
      axios.put,
      `http://localhost:3600/api/v1/songs/${action.payload._id}`,
      action.payload
    );
    yield put(updateSongSuccess(data));
  } catch (error: any) {
    yield put(updateSongFailure(String(error.message)));
  }
}

function* removeSongHandler(action: ReturnType<typeof removeSongSuccess>) {
  try {
    yield call(axios.delete, `http://localhost:3600/api/v1/songs/${action.payload}`);
    yield put(startFetchStatistics())
    yield put(removeSongSuccess(action.payload));
  } catch (error: any) {
    yield put(removeSongFailure(String(error.message)));
  }
}

function* addSongSaga() {
  yield takeLatest("songs/addSong", addSongHandler);
}

function* fetchSongSaga() {
  yield takeLatest("songs/fetchSongsStart", fetchSongsHandler);
}

function* updateSongSaga() {
  yield takeLatest("songs/updateSongStart", updateSongHandler);
}

function* removeSongSaga() {
  yield takeLatest("songs/removeSongStart", removeSongHandler);
}



export {addSongSaga, fetchSongSaga, updateSongSaga, removeSongSaga}

