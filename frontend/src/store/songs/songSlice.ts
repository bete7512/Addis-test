
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/Song";

interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

interface SongQuery {
  searchQuery?: string;
  page: number;
  pageSize: number;
}
const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {

    addSong: (state, action: PayloadAction<Song>) => {
      console.log("this is action", action)
      state.loading = false;
    },
    addSongSuccess: (state, action: PayloadAction<Song>) => {
      if (state.songs.length > 10) {
        state.songs.pop();
        state.songs.unshift(action.payload);

      }
      else{

        state.songs.unshift(action.payload);
      }
      state.loading = false;
    },
    addSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    updateSongStart: (state, action: PayloadAction<Song>) => {
      console.log("this is action", action)
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
      state.loading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    removeSongStart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    removeSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    removeSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchSongsStart: (state, _action: PayloadAction<SongQuery>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export type { SongQuery };

export const {
    addSongSuccess,
    addSong,
    addSongFailure,
    updateSongStart,
    updateSongSuccess,
    updateSongFailure,
    removeSongStart,
    removeSongSuccess,
    removeSongFailure,
    fetchSongsStart,
    fetchSongs,
    fetchSongsFailure,
  } = songSlice.actions;
  
  export default songSlice.reducer;
  



