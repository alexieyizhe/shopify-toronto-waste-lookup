import React from 'react';
import styled from 'styled-components';

import { siteSubtitle } from '../../utils/siteData';

const ComponentContainer = styled.div`
  height: auto;
  min-height: 10vh;

  padding: ${props => props.theme.styling.bodySpacing};

  background-color: ${props => `${props.theme.colors.secondary}15`}; // 8 digit hex code includes alpha value
`;


const SubHeader = styled.div`
  font-weight: 600;
  font-size: 2vw;
  color: ${props => props.theme.colors.secondary};

  margin-bottom: 1vw;
`;

const EmptyDisclaimer = styled.div`
  width: 100%;
  padding: ${props => props.theme.styling.bodySpacing};
  color: grey;
  text-align: center;
`;

// Component
export default ({ children }) => (
  <ComponentContainer>
    <SubHeader>{siteSubtitle}</SubHeader>
    {children.length > 0 ? children : <EmptyDisclaimer><span>You have no favourites. Try adding some with the star icon next to the item name!</span></EmptyDisclaimer>}
  </ComponentContainer>
);
