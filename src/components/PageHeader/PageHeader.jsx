import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
  background-color: grey;
  width: 100%;
  height: 17vh;

  margin-top: 1vh;

  background-image: ${props => `linear-gradient(to right, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`}; // TODO: match gradient in design pic more

  display: flex;

  & > div.pageTitle {
    margin: auto;

    color: white;
    font-size: 3vw;
    font-weight: 600;
  }
`;

// Component
export default ({ title }) => (
  <ComponentContainer>
    <div className="pageTitle">
      {title}
    </div>
  </ComponentContainer>
);
