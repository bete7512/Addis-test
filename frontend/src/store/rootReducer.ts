import { combineReducers } from "redux";

import songReducer from "./songs/songSlice";
import stateReducer from "./statitstics/stateSlice";
const rootReducer = combineReducers({
  songs: songReducer,
  statistics: stateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
