import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* --- STYLES & ANIMATIONS --- */
const ComponentContainer = styled.div`
  background-color: grey;
  width: 100%;
  height: 15vh;

  margin-top: 2vh;

  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.primary}, ${
      props.theme.colors.secondary
    })`};

  display: flex;

  & > div.pageTitle {
    margin: auto;

    color: white;
    font-size: 1.5em;
    font-weight: 600;
  }
`;

/* --- Component [FUNCTIONAL] --- */
const Header = ({ title }) => (
  <ComponentContainer>
    <div className="pageTitle">{title}</div>
  </ComponentContainer>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'This is a default title'
};

export default Header;
