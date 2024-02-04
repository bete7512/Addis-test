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
/*
export interface AnalyticsData {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCounts: { genre: string; count: number }[];
    artistCounts: { artist: string; count: number }[];
    albumCounts: { album: string; count: number }[];
  }
*/
const Statistics: React.FC = () => {
  const statistics = useSelector((state: any) => state.statistics.statistics);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchStatistics());
  }, [dispatch]);
  console.log(statistics);
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

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && Object.keys(statistics).length > 0 && (
        <>
          <AnalyticsContainer>
            <AnalyticsCard>
              <AnalyticsTitle>Total Songs</AnalyticsTitle>
              <p>{statistics?.totalSongs}</p>
            </AnalyticsCard>

            <AnalyticsCard>
              <AnalyticsTitle>Total Artists</AnalyticsTitle>
              <p>{statistics?.totalArtists}</p>
            </AnalyticsCard>

            <AnalyticsCard>
              <AnalyticsTitle>Total Albums</AnalyticsTitle>
              <p>{statistics?.totalAlbums}</p>
            </AnalyticsCard>

            <AnalyticsCard>
              <AnalyticsTitle>Total Genres</AnalyticsTitle>
              <p>{statistics?.totalGenres}</p>
            </AnalyticsCard>
          </AnalyticsContainer>

          {/* <AnalyticsTableContainer>
          {renderTable(statistics?.genreCounts, "genre")}
            {renderTable(statistics?.artistCounts, "artist")}
            {renderTable(statistics?.albumCounts, "album")}
          </AnalyticsTableContainer> */}
        </>
      )}
    </div>
  );
};

const renderTable = (data: any, keyName: string) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const rowsToShow = 2;

  const visibleData = data.slice(startIndex, startIndex + rowsToShow);

  const handleLoadMore = () => {
    if (startIndex + rowsToShow < data.length) {
      setStartIndex(startIndex + rowsToShow);
    }
  };

  return (
    <AnalyticsCard>
      <table
        css={css`
          width: 100%;
          text-transform: capitalize;
          padding: 6px;
        `}
      >
        <thead>
          <tr
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <th>{keyName}</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item: any) => (
            <tr
              key={item[keyName]}
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <td>{item[keyName]}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
        {data.length > rowsToShow && startIndex + rowsToShow < data.length && (
          <tfoot>
            <tr>
              <td colSpan={2}>
                <button onClick={handleLoadMore}>Load More</button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </AnalyticsCard>
  );
};


export default Statistics;