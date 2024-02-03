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

export { AddSongButton };