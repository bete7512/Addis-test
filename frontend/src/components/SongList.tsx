/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardParent, songCardStyles } from "./css/list";
import { fetchSongsStart, removeSongStart } from "../store/songs/songSlice";
import { SearchContainer } from "./styled/SearchContainer";
import { ClipLoader } from "react-spinners";
import UpdateSongForm from "./UpdateSong";
import { Song } from "../types/Song";

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const songs = useSelector((state: any) => state.songs.songs);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);

  useEffect(() => {
    dispatch(fetchSongsStart({ searchQuery: searchTerm, page, pageSize }));
  }, [dispatch, searchTerm, page, pageSize]);

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchSongsStart({ searchQuery: searchTerm, page: 1, pageSize }));
  };

  const handleEdit = (song: Song) => {
    setId(song._id || "");
    setTitle(song.title);
    setArtist(song.artist);
    setAlbum(song.album);
    setGenre(song.genre);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete ${id}`);
    dispatch(removeSongStart(id));
  };

  const handlePagination = (newPage: number) => {
    setPage(newPage);
    dispatch(
      fetchSongsStart({ searchQuery: searchTerm, page: newPage, pageSize })
    );
  };

  return (
    <div
      css={css`
        padding: 10px 30px 10px 10px;
        align-items: center;
      `}
    >
      {isEditing && (
        <UpdateSongForm
          onBackClick={() => {
            setIsEditing(false);
          }}
          _id={id}
          title={title}
          artist={artist}
          album={album}
          genre={genre}
        />
      )}
      <h1> Song List </h1>
      <div>
        <SearchContainer>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </SearchContainer>
        <div css={cardParent}>
          {error ? (
            <div>Error: {error}</div>
          ) : loading ? (
            <ClipLoader css={css`width: 100px;`} color="#000" />
          ) : songs && songs.length ? (
            <>
              {songs.map((song: any) => (
                <div key={song.id} css={songCardStyles}>
                  <div>
                    <h1>{song.title}</h1>
                    <p>{song.artist}</p>
                    <p>{song.genre}</p>
                    <p>{song.album}</p>
                  </div>
                  <div className="card-buttons">
                    <button className="edit" onClick={() => handleEdit(song)}>
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(song._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>No songs found</div>
          )}
        </div>
        <div>
          <button
            onClick={() => handlePagination(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>{page}</span>
          <button
            onClick={() => handlePagination(page + 1)}
            disabled={songs.length < pageSize}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongList;
