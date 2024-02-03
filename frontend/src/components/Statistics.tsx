/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { AnalyticsCard, AnalyticsTitle, AnalyticsContainer,AnalyticsTableContainer } from "./styled/statistics";
import { AnalyticsData } from "../types/Statitstics-type";

const sampleAnalyticsData: AnalyticsData = {
  totalSongs: 100,
  totalArtists: 50,
  totalAlbums: 30,
  totalGenres: 20,
  genreCounts: [
    { genre: "Rock", count: 30 },
    { genre: "Pop", count: 25 },
    { genre: "Jazz", count: 15 },
  ],
  artistCounts: [
    { artist: "John Doe", count: 10 },
    { artist: "Jane Smith", count: 15 },
    { artist: "Jane Smith", count: 15 },
    { artist: "Jane Smith", count: 15 },
    { artist: "Jane Smith", count: 15 },
    { artist: "Jane Smith", count: 15 },
    { artist: "Bob Johnson", count: 25 },
  ],
  albumCounts: [
    { album: "Album 1", count: 15 },
    { album: "Album 2", count: 10 },
    { album: "Album 3", count: 5 },
  ],
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

const Statistics: React.FC = () => {
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
      <AnalyticsContainer>
        <AnalyticsCard>
          <AnalyticsTitle>Total Songs</AnalyticsTitle>
          <p>{sampleAnalyticsData.totalSongs}</p>
        </AnalyticsCard>

        <AnalyticsCard>
          <AnalyticsTitle>Total Artists</AnalyticsTitle>
          <p>{sampleAnalyticsData.totalArtists}</p>
        </AnalyticsCard>

        <AnalyticsCard>
          <AnalyticsTitle>Total Albums</AnalyticsTitle>
          <p>{sampleAnalyticsData.totalAlbums}</p>
        </AnalyticsCard>

        <AnalyticsCard>
          <AnalyticsTitle>Total Genres</AnalyticsTitle>
          <p>{sampleAnalyticsData.totalGenres}</p>
        </AnalyticsCard>
      </AnalyticsContainer>

      <AnalyticsTableContainer>
        {renderTable(sampleAnalyticsData.genreCounts, "genre")}
        {renderTable(sampleAnalyticsData.artistCounts, "artist")}
        {renderTable(sampleAnalyticsData.albumCounts, "album")}
      </AnalyticsTableContainer>
    </div>
  );
};

export default Statistics;
