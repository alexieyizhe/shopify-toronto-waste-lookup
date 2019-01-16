import React from 'react';
import styled from 'styled-components';

import { resultsEmptyPlaceholder } from '../../utils/siteData';


const ComponentContainer = styled.div`
  height: auto;
  min-height: 40vh;

  margin: 3vh ${props => props.theme.styling.bodySpacing}; // margin allows for margin collapsing
`;

const EmptyDisclaimer = styled.div`
  width: 75%;
  margin: 5vh auto; // collapses into container margin when EmptyDisclaimer is present

  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    {children.length > 0 ? children : <EmptyDisclaimer><span>{resultsEmptyPlaceholder}</span></EmptyDisclaimer>}
  </ComponentContainer>
);
