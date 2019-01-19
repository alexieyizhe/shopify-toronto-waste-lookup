import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { DraggableContainer } from '@wuweiweiwu/react-shopify-draggable';

import { siteSubtitle, favsEmptyPlaceholder } from '../../utils/siteData';


const ComponentContainer = styled.div`
  height: auto;
  min-height: 20vh;

  margin: 0; // margin allows for margin collapsing
  padding: 2vh;
  background-color: ${props => `${props.theme.colors.secondary}15`}; // 8 digit hex code includes alpha value

  & *:focus {
    outline: none;
  }
`;


const SubHeader = styled.div`
  font-size: 1.5em;
  font-weight: 700;

  color: ${props => props.theme.colors.secondary};

  margin-bottom: 3vh;
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
  margin: 5vh auto;

  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => {
  console.log(children);
  return (
    <ComponentContainer>
      <SubHeader>{siteSubtitle}</SubHeader>
      <DraggableContainer type="sortable">
        <PoseGroup>
          {children.length > 0 ? children : <EmptyDisclaimer key="emptyDisclaimerFavs"><span>{favsEmptyPlaceholder}</span></EmptyDisclaimer>}
        </PoseGroup>
      </DraggableContainer>
    </ComponentContainer>
  );
}
