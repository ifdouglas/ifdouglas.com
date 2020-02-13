import React from 'react'
import { func, string } from 'prop-types'
import { ReactComponent as MoonIcon } from '../../assets/imgs/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/imgs/sun.svg'
import Styled from './styled'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <Styled.Wrapper
      lightTheme={isLight}
      onClick={toggleTheme}
    >
      <SunIcon />
      <MoonIcon />
    </Styled.Wrapper>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
