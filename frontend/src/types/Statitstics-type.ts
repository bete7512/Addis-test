export interface AnalyticsData {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCounts: { genre: string; count: number }[];
    artistCounts: { artist: string; count: number }[];
    albumCounts: { album: string; count: number }[];
  }