/**
 *
 * ColumnList
 *
 */
import React from 'react';
import styled from 'styles/styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function ColumnList({ children, className = '' }) {
  return (
    <ListContainer className={className}>
      {children}
    </ListContainer>
  );
}

export default ColumnList;
