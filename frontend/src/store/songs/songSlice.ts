import { createSlice,PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import {Appthunk}

import { Song } from '../../types/Song';

interface SongState {
    data: Song[]
    loading: boolean
    error: string | null
}

const initialState: SongState = {
    data: [],
    loading: false,
    error: null,
}

const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        addSongStart : (state) => {
            state.loading = true
        },
        addSong: (state, action: PayloadAction<Song>) => {
            state.data.push(action.payload)
        },
        addSongSuccess: (state, action: PayloadAction<Song>) => {
            state.data.push(action.payload)
            state.loading = false
        },
        addSongFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
        removeSongSuccess: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(song => song.id !== action.payload)
            state.loading = false
        },
        removeSongFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
        fetchSongsStart: (state) => {
            state.loading = true
        },
        fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
            state.data = action.payload
            state.loading = false
        },
        fetchSongsFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },


    }
})


export const {  addSongStart, addSongSuccess, addSongFailure,  removeSongSuccess, removeSongFailure, fetchSongsStart, fetchSongsSuccess, fetchSongsFailure } = songSlice.actions

export default songSlice.reducer