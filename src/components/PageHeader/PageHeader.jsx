import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: grey;
  width: 100%;
  height: 10%;
`;

// Component
export default ({ title }) => <Header>{title}</Header>;
