/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const AnalyticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: left;
`;
const AnalyticsTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: left;
  gap: 8px;
`;

const AnalyticsCard = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 20%;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AnalyticsTitle = styled.h2`
  font-size: 1.2rem;
`;


export { AnalyticsContainer, AnalyticsCard, AnalyticsTitle, AnalyticsTableContainer };