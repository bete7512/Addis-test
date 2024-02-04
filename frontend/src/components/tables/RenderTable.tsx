/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { AnalyticsCard } from "../styled/statistics";

interface TableProps {
  data: any;
  title: string;
}

const Table: React.FC<TableProps> = (data: any, _title: string) => {
  const [startIndex, setStartIndex] = useState(0);
  const rowsToShow = 40;
  const key = data.title;
  const visibleData = data.data.slice(startIndex, startIndex + rowsToShow);
  const handleLoadMore = () => {
    if (startIndex + rowsToShow < data.data.length) {
      setStartIndex(startIndex + rowsToShow);
    }
  };

  return (
    <AnalyticsCard>
      <table
        css={css`
          width: 100%;
          text-transform: capitalize;
          padding: 6px;
        `}
      >
        <thead>
          <tr
            css={css`
              display: flex;
              justify-content: space-between;
              font-weight: bold;
              font-size: 1.5rem;
            `}
          >
            <th>{key}</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item: any) => (
            <tr
              key={item[key]}
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <td>{item[key]}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
        {data.length > rowsToShow && (
          <tfoot>
            <tr>
              <td colSpan={1}>
                <button onClick={handleLoadMore}>Load More</button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </AnalyticsCard>
  );
};

export default Table;
