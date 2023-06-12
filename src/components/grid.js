import React from "react";
// eslint-disable-next-line no-unused-vars
import _JSXStyle from 'styled-jsx/style';

export const Grid = ({children, columns, flipFlop}) => {
  const gridTemplateColumns = columns ? columns : `repeat(${children.length}, 1fr)`;
  return (
    <>
      <div className="grid">
        {children}
      </div>
      <style jsx>
      {`
        div {
          display: grid;
          grid-template-columns: ${gridTemplateColumns};
          grid-gap: 2rem 2rem;
        }

        @media (max-width: 850px) {
          div {
            grid-template-columns: 1fr;
          }
      `}
      </style>
    </>
  )
};

export const Column = ({children}) => (
  <div>
    {children}
  </div>
);