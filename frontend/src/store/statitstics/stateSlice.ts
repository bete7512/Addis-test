import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnalyticsData } from "../../types/Statitstics-type";
interface SongState {
  statistics: AnalyticsData;
  loading: boolean;
  error: string | null;
}


const initialState: SongState = {
    statistics: {} as AnalyticsData,
    loading: false,
    error: null,
  };
  
const stateSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    startFetchStatistics: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStatisticsSuccess: (state, action: PayloadAction<AnalyticsData>) => {
      state.statistics = action.payload;
      state.loading = false;
    },
    fetchStatisticsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});



export const {
    startFetchStatistics,
    fetchStatisticsSuccess,
    fetchStatisticsFailure,
  } = stateSlice.actions;
  
  export default stateSlice.reducer;
