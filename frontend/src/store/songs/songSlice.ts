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
    removeSongStart: (state, action: PayloadAction<string>) => {
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
    fetchSongsStart: (state, action: PayloadAction<SongQuery>) => {
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
  
































//   export const addSongAsync = (song:{ title : string, artist : string, album : string, genre : string }): AppThunk => async (dispatch) => {
//     try {
//       dispatch(addSongStart());
//       const response = await axios.post(
//         "http://localhost:3600/api/v1/songs",
//         { title : song.title, artist : song.artist, album : song.album, genre : song.genre }
//       );
//       dispatch(addSongSuccess(response.data));
//     } catch (error : any) {
//       dispatch(addSongFailure(error.message));
//     }
//   };
//   export const updateSongAsync =
//     (song: { id: string; title: string; artist: string; album: string; genre: string }): AppThunk =>
//     async (dispatch) => {
//       try {
//         dispatch(updateSongStart());
//         const response = await axios.put(
//           `http://localhost:3600/api/v1/songs/${song.id}`,
//           { title: song.title, artist: song.artist, album: song.album, genre: song.genre }
//         );
//         dispatch(updateSongSuccess(response.data));
//       } catch (error: any) {
//         dispatch(updateSongFailure(error.message));
//       }
//     };
  
//   export const removeSongAsync =
//     (songId: string): AppThunk =>
//     async (dispatch) => {
//       try {
//         dispatch(removeSongStart());
//         await axios.delete(`http://localhost:3600/api/v1/songs/${songId}`);
//         dispatch(removeSongSuccess(songId));
//       } catch (error: any) {
//         dispatch(removeSongFailure(error.message));
//       }
//     };
  

// export const fetchSongs = (): AppThunk => async (dispatch) => {
//   try {

//     console.log("am the one+++++++++++++++++++++++++++++++")
//     dispatch(fetchSongsStart());
//     const response = await axios.get("http://localhost:3600/api/v1/songs");
//     dispatch(fetchSongs(response.data));
//   } catch (error: any) {
//     dispatch(fetchSongsFailure(error.message));
//   }
// };



