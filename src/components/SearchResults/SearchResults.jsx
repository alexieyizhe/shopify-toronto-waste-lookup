import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import { resultsEmptyPlaceholder } from '../../utils/siteData';


const ComponentContainer = styled.div`
  height: auto;
  min-height: 40vh;

  margin: 3vh ${props => props.theme.styling.bodySpacing}; // margin allows for margin collapsing
`;


const DisclaimerAnim = {
  enter: {
    opacity: 1,
    delay: 450
  },
  exit: { opacity: 0 }
}

        
const EmptyDisclaimer = styled(posed.div(DisclaimerAnim))`
  width: 75%;
  margin: 5vh auto; // collapses into container margin when EmptyDisclaimer is present

  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    <PoseGroup>
      {children.length > 0 ? children : <EmptyDisclaimer key="emptyDisclaimerSearch"><span>{resultsEmptyPlaceholder}</span></EmptyDisclaimer>}
    </PoseGroup>
  </ComponentContainer>
);
