/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import SongCoverImage from "../assets/first.jpg"; // Adjust the import path as needed
import { cardParent, songCardStyles } from "./css/list";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
} from "../store/songs/songSlice";
import styled from "@emotion/styled";
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type="search"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    flex: 1;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const SongList: React.FC = () => {
  const dispatch = useDispatch();
  //   const musicIMage = require("../assets/music.png");
  const [songs, setSongs] = useState([
    {
      id: 0,
      title: "Tikur Sew",
      artist: "Teddy Afro",
      album: "Tikur Sew",
      genre: "Jazz",
    },
    {
      id: 1,
      title: "Tikur Sew",
      artist: "Teddy Afro",
      album: "Tikur Sew",
      genre: "Jazz",
    },
    {
      id: 2,
      title: "Tikur Sew",
      artist: "Teddy Afro",
      album: "Tikur Sew",
      genre: "Jazz",
    },
    {
      id: 3,
      title: "Tikur Sew",
      artist: "Teddy Afro",
      album: "Tikur Sew",
      genre: "Jazz",
    },
    {
      id: 4,
      title: "Tikur Sew",
      artist: "Teddy Afro",
      album: "Tikur Sew",
      genre: "Jazz",
    },
  ]);
  //   useSelector((state: any) => state.songs);

  //   useEffect(() => {
  //     dispatch(fetchSongsStart());
  //   }, [dispatch]);

  const handleCardClick = (id: number) => {
    console.log(`clicked ${id}`);
  };

  /*
Type '{ children: Element[]; key: any; css: SerializedStyles; onClick: () => void; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'*/
  return (
    <div
      css={css`
        padding: 10px 30px 10px 10px;
        align-items: center;
      `}
    >
      <h2> Song List </h2>
      {/* {songs.loading ? (
        <ClipLoader color={"#36D7B7"} loading={true} css={override} size={50} />
      ) : ( */}
      <SearchContainer>
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </SearchContainer>
      <div css={cardParent}>
        {songs.map((song: any) => (
          <div
            key={song.id}
            css={songCardStyles}
            onClick={() => handleCardClick(song.id)}
          >
            {/* <img src={SongCoverImage} alt="Song Cover" /> */}
            <div>
              <h1>{song.title}</h1>
              <p>{song.artist}</p>
              <p>{song.genre}</p>
              <p>{song.album}</p>
            </div>
          </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default SongList;
