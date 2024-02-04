/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import {
  AnalyticsCard,
  AnalyticsTitle,
  AnalyticsContainer,
  AnalyticsTableContainer,
} from "./styled/statistics";
import { useDispatch, useSelector } from "react-redux";
import { startFetchStatistics } from "../store/statitstics/stateSlice";
import Table from "./tables/RenderTable";

const Statistics: React.FC = () => {
  const statistics = useSelector((state: any) => state.statistics.statistics);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchStatistics());
  }, [dispatch]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: right;
        padding: 10px;
      `}
    >
      <h1>Statistics</h1>

      {loading && <p></p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && Object.keys(statistics).length > 0 && (
        <>
          <AnalyticsContainer>
            <AnalyticsCard>
              <div>
                <AnalyticsTitle>Total Songs</AnalyticsTitle>
                <div
                  css={css`
                    color: #3b82f6;
                    font-weight: bold;
                    font-size: 2rem;
                  `}
                >
                  {statistics?.totalSongs}
                </div>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#3b82f6"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
              </svg>
            </AnalyticsCard>

            <AnalyticsCard>
              <div>
                <AnalyticsTitle>Total Artists</AnalyticsTitle>
                <div
                  css={css`
                    color: #22c55e;
                    font-weight: bold;
                    font-size: 2rem;
                  `}
                >
                  {statistics?.totalArtists}
                </div>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                color="#22c55e"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
            </AnalyticsCard>

            <AnalyticsCard>
              <div>
                <AnalyticsTitle>Total Albums</AnalyticsTitle>
                <div  css={css`
                    color: #22c55e;
                    font-weight: bold;
                    font-size: 2rem;
                  `}>{statistics?.totalAlbums}</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1c0aa3"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"
                />
              </svg>
            </AnalyticsCard>

            <AnalyticsCard>
              <div>
              <AnalyticsTitle>Total Genres</AnalyticsTitle>
              <div   css={css`
                    color: #22c55e;
                    font-weight: bold;
                    font-size: 2rem;
                  `}>{statistics?.totalGenres}</div>

              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1c0aa3"
                  d="M10 18q1.25 0 2.125-.875T13 15V8h2q.425 0 .713-.288T16 7q0-.425-.288-.712T15 6h-2.5q-.425 0-.712.288T11.5 7v5.4q-.35-.2-.725-.3T10 12q-1.25 0-2.125.875T7 15q0 1.25.875 2.125T10 18m2 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                />
              </svg>
            </AnalyticsCard>
          </AnalyticsContainer>

          <AnalyticsTableContainer>
            {statistics?.genreCounts && (
              <Table data={statistics?.genreCounts} title={"genre"}></Table>
            )}
            {statistics?.artistCounts && (
              <Table data={statistics?.artistCounts} title={"artist"}></Table>
            )}
            {statistics?.albumCounts && (
              <Table data={statistics?.albumCounts} title={"album"}></Table>
            )}
          </AnalyticsTableContainer>
        </>
      )}
    </div>
  );
};

export default Statistics;
