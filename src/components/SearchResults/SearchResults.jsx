import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
  height: auto;
  min-height: 40vh;

  margin: ${props => props.theme.styling.bodySpacing}; // margin allows for margin collapsing
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    {children}
  </ComponentContainer>
);
