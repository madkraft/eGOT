import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 10%;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Account = () => (
    <GridWrapper>
        <h2>Strona z kontem</h2>
    </GridWrapper>
)