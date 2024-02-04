import {all} from 'redux-saga/effects';

import { addSongSaga, fetchSongSaga, updateSongSaga, removeSongSaga } from './songs/songSaga';
import { fetchStatisticsSaga } from './statitstics/statesSaga';
export default function* rootSaga() {
    yield all([
      addSongSaga(),
      fetchSongSaga(),
      updateSongSaga(),
      removeSongSaga(),
      fetchStatisticsSaga(),
    ]);
}


