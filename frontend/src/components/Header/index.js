import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Header = ({ toggleTheme }) => {
  const { title, logo, colors } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logo} alt="Be The Hero" />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.border}
        onColor={colors.primary}
        offHandleColor={colors.textMedium}
      />
    </Container>
  );
};

export default Header;
