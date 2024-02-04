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
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { startFetchStatistics } from "../statitstics/stateSlice";

function* fetchSongsHandler(action: ReturnType<typeof fetchSongsStart>) {
  try {
    const { page, pageSize, searchQuery } = action.payload;

    // Construct the API URL with pagination and search parameters
    const apiUrl = `https://addis-software-song-api.onrender.com/api/v1/songs?page=${page}&pageSize=${pageSize}&search=${searchQuery}`;

    const { data } = yield call(axios.get, apiUrl);
    yield put(fetchSongs(data));
  } catch (error: any) {
    yield put(fetchSongsFailure(String(error.message)));
  }
}

function* addSongHandler(action: ReturnType<typeof addSong>) {
  try {
    const notify = () => toast("Song added successfully!");
    const { data } = yield call(
      axios.post,
      "https://addis-software-song-api.onrender.com/api/v1/songs",
      action.payload
    );
    yield put(addSongSuccess(data));
    yield put(startFetchStatistics())
    notify()
  } catch (error: any) {
    yield put(addSongFailure(String(error.message)));
  }
}

function* updateSongHandler(action: ReturnType<typeof updateSongSuccess>) {
  try {
    const notify = () => toast("Song updated successfully!");
    const { data } = yield call(
      axios.put,
      `https://addis-software-song-api.onrender.com/api/v1/songs/${action.payload._id}`,
      action.payload
    );
    yield put(updateSongSuccess(data));
    notify()
  } catch (error: any) {
    yield put(updateSongFailure(String(error.message)));
  }
}

function* removeSongHandler(action: ReturnType<typeof removeSongSuccess>) {
  try {
    const notify = () => toast("Song removed successfully!");
    yield call(axios.delete, `https://addis-software-song-api.onrender.com/api/v1/songs/${action.payload}`);
    yield put(startFetchStatistics())
    notify()
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

