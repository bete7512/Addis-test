/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

import Back from "../assets/back.svg";
import {
  ModalContainer,
  InputField,
  SubmitButton,
  BackButton,
  Overlay,
} from "./styled/form";
import { addSong } from "../store/songs/songSlice";
import { useDispatch } from "react-redux";
import { Song } from "../types/Song";
interface SongFormProps {
  onBackClick: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ onBackClick }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !artist || !album || !genre) {
      alert("Please fill in all fields");
      return;
    }
    const song: Song = {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
    };

    dispatch(addSong(song));
    onBackClick();
  };

  return (
    <>
      <Overlay />
      <ModalContainer>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div></div>
          <BackButton onClick={onBackClick}>
            <img src={Back} alt="" />
          </BackButton>
        </div>
        <div
          css={css`
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: bold;
          `}
        >
          Add New Song
        </div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="title"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Title
          </label>
          <InputField
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="artist"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Artist
          </label>
          <InputField
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <label
            htmlFor="album"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Album
          </label>
          <InputField
            type="text"
            placeholder="Album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <label
            htmlFor="genre"
            css={css`
              margin-bottom: 5px;
              font-weight: bold;
            `}
          >
            Genre
          </label>
          <InputField
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <div
            css={css`
              margin-top: 15px;
            `}
          ></div>
          <SubmitButton css={css`outline: none`} type="submit" onClick={handleSubmit}>
            Submit
          </SubmitButton>
          <BackButton css={css`outline: none`} onClick={onBackClick}>Back</BackButton>
        </form>
      </ModalContainer>
      <Overlay />
    </>
  );
};

export default SongForm;
