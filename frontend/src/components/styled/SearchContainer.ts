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

export { SearchContainer };