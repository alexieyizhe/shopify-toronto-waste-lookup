import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import { siteSubtitle, favsEmptyPlaceholder } from '../../utils/siteData';

const ComponentContainer = styled.div`
  height: auto;
  min-height: 20vh;

  padding: ${props => props.theme.styling.bodySpacing};

  background-color: ${props => `${props.theme.colors.secondary}15`}; // 8 digit hex code includes alpha value
`;


const SubHeader = styled.div`
  font-weight: 600;
  font-size: 2vw;
  color: ${props => props.theme.colors.secondary};

  margin-bottom: 1vw;
`;

const DisclaimerAnim = {
  enter: {
    opacity: 1,
    delay: 450
  },
  exit: { opacity: 0 }
}

const EmptyDisclaimer = styled(posed.div(DisclaimerAnim))`
  width: 100%;
  padding: ${props => props.theme.styling.bodySpacing};
  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    <SubHeader>{siteSubtitle}</SubHeader>
    <PoseGroup>
      {children.length > 0 ? children : <EmptyDisclaimer key="emptyDisclaimerFavs"><span>{favsEmptyPlaceholder}</span></EmptyDisclaimer>}
    </PoseGroup>
  </ComponentContainer>
);
