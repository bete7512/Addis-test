import styled from "@emotion/styled";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure the overlay is behind the modal */
`;



const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;

const SubmitButton = styled.button`
padding: 10px 15px;
margin-right: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;
outline: none;
background-color: #007bff;
color: #fff;
  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled.button`
  background-color: #ccc;
  color: #000;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  outline: none;

  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;



export { ModalContainer, InputField, SubmitButton, BackButton,Overlay };