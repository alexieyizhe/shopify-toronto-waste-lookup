import React from 'react';
import styled from 'styled-components';

import { siteSubtitle, favsEmptyPlaceholder } from '../../utils/siteData';


const ComponentContainer = styled.div`
  height: auto;
  min-height: 20vh;

  margin: 0; // margin allows for margin collapsing
  padding: 2vh;
  background-color: ${props => `${props.theme.colors.secondary}15`}; // 8 digit hex code includes alpha value
`;


const SubHeader = styled.div`
  font-size: 1.5em;
  font-weight: 700;

  color: ${props => props.theme.colors.secondary};

  margin-bottom: 3vh;
`;

const EmptyDisclaimer = styled.div`
  width: 75%;
  margin: 5vh auto;

  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    <SubHeader>{siteSubtitle}</SubHeader>
    {children.length > 0 ? children : <EmptyDisclaimer><span>{favsEmptyPlaceholder}</span></EmptyDisclaimer>}
  </ComponentContainer>
);
