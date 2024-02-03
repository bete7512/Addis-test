/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react';

interface AnalyticsData {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  genreCounts: { genre: string; count: number }[];
  artistCounts: { artist: string; count: number }[];
  albumCounts: { album: string; count: number }[];
}

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
    { artist: "Bob Johnson", count: 25 },
  ],
  albumCounts: [
    { album: "Album 1", count: 15 },
    { album: "Album 2", count: 10 },
    { album: "Album 3", count: 5 },
  ],
};

const AnalyticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: left;
`;

const AnalyticsCard = styled.div`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 180px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AnalyticsTitle = styled.h2`
  font-size: 1rem;
`;

const AnalyticsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AnalyticsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Statistics: React.FC = () => {
  return (
<div css={css`display: flex; flex-direction: column;align-items: right; padding: 10px`}>
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

        <AnalyticsCard>
          <AnalyticsTitle>Genre Counts</AnalyticsTitle>
          <AnalyticsList>
            {sampleAnalyticsData.genreCounts.map((genreCount) => (
              <AnalyticsListItem key={genreCount.genre}>
                <span>{genreCount.genre}</span>
                <span>{genreCount.count}</span>
              </AnalyticsListItem>
            ))}
          </AnalyticsList>
        </AnalyticsCard>

        <AnalyticsCard>
          <AnalyticsTitle>Artist Counts</AnalyticsTitle>
          <AnalyticsList>
            {sampleAnalyticsData.artistCounts.map((artistCount) => (
              <AnalyticsListItem key={artistCount.artist}>
                <span>{artistCount.artist}</span>
                <span>{artistCount.count}</span>
              </AnalyticsListItem>
            ))}
          </AnalyticsList>
        </AnalyticsCard>

        <AnalyticsCard>
          <AnalyticsTitle>Album Counts</AnalyticsTitle>
          <AnalyticsList>
            {sampleAnalyticsData.albumCounts.map((albumCount) => (
              <AnalyticsListItem key={albumCount.album}>
                <span>{albumCount.album}</span>
                <span>{albumCount.count}</span>
              </AnalyticsListItem>
            ))}
          </AnalyticsList>
        </AnalyticsCard>
      </AnalyticsContainer>
    </div>
  );
};

export default Statistics;
