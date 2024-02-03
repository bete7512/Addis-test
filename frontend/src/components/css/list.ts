/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThirdImage from "../../assets/second.jpg";

const songCardStyles = css`
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 300px;
  overflow: hidden;
  height: 300px;
  border-radius: 10px;
  background: url(${ThirdImage}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  transition: background-color 0.3s ease; /* Color transition on hover */

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Darken the background color on hover */
  }

  h1 {
    margin: 0;
    width: 100%;
    font-weight: 1000;
    font-size: 1.8rem;
  }

  p {
    margin: 3px 0;
    font-size: 1.2rem;
  }
  .card-buttons {
    display: flex;
    justify-content: right;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      margin: 0 5px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .delete {
      background-color: #E9463F;
      color: #fff;
    }
    
    .delete:hover {
      background-color: #d2362b; /* Slightly darker on hover */
      color: #fff;
    }
    
    .edit {
      background-color: #007bff;
      color: #fff;
    }
    
    .edit:hover {
      background-color: #0056b3;
      color: #fff;
    }
    
  }
`;

const cardParent = css`
display: flex;
flex-wrap: wrap;
`;


export { songCardStyles, cardParent };