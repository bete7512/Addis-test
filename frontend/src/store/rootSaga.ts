import {all} from 'redux-saga/effects';
// import songSaga from './songs/songSlice';

export type AppThunk = (...args: any) => any;


export default function* rootSaga() {
    yield all([
        // songSaga
    ]);
}


