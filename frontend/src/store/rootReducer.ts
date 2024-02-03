import { combineReducers } from "redux";

import songReducer from "./songs/songSlice";

const rootReducer = combineReducers({
  songs: songReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
