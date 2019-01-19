import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { DraggableContainer } from '@wuweiweiwu/react-shopify-draggable';

import { searchResultsPlaceholders, FetchStateEnum } from '../../utils/siteData';
import { ItemsContext } from '../../utils/siteContext';


const ComponentContainer = styled.div`
  height: auto;
  min-height: 40vh;

  margin: 3vh ${props => props.theme.styling.bodySpacing}; // margin allows for margin collapsing

  background-color: white;

  & div.draggableItemContainer {
    background-color: white; // 8 digit hex code includes alpha value
  }
  & *:focus {
    outline: none;
  }
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

  color: ${props => props.color};
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    <ItemsContext.Consumer>
      {({ appStatus }) => {
        console.log(appStatus);
        let showDisclaimer = true;
        let disclaimerContents;
        switch(appStatus) {
          case FetchStateEnum.ERROR:
            disclaimerContents = searchResultsPlaceholders.error;
            break;
          case FetchStateEnum.WAITING:
            disclaimerContents = searchResultsPlaceholders.waiting;
            break;
          case FetchStateEnum.READY:
            showDisclaimer = children.length === 0;
            disclaimerContents = searchResultsPlaceholders.ready;
            break;
          case FetchStateEnum.SEARCHING:
            showDisclaimer = children.length === 0;
            disclaimerContents = searchResultsPlaceholders.empty;
            break;
          default:
            disclaimerContents = {text: 'This is a test disclaimer', color: 'grey'};
        }
        return (
          <DraggableContainer type="sortable">
            <PoseGroup>
              {showDisclaimer ? <EmptyDisclaimer key="emptyDisclaimerSearch" color={disclaimerContents.color}><span>{disclaimerContents.text}</span></EmptyDisclaimer> : children}
            </PoseGroup>
          </DraggableContainer>
        );
      }}
    </ItemsContext.Consumer>

  </ComponentContainer>
);
