/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

import MinaLayout from "../layouts/MinaLayout";
import Statistics from "../components/Statistics";
import SongForm from "../components/SongForm";
import SongList from "../components/SongList";
import styled from "@emotion/styled";

const AddSongButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto; /* Align to the right */

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <MinaLayout>
      <div css={css`display: flex; justify-content: space-between; margin-right: 10px`}>
        <div></div>
        <AddSongButton onClick={() => setShowForm(true)}>
          Add Song
        </AddSongButton>
      </div>
      <Statistics />
      {showForm && (
        <SongForm
          onBackClick={() => {
            setShowForm(false);
          }}
        />
      )}
      <SongList />
    </MinaLayout>
  );
};

export default HomePage;
