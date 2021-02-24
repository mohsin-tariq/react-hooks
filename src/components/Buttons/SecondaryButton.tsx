import styled, { css } from 'styled-components'
import ButtonStyle from './ButtonStyle'
import SmallButtonStyle from './SmallButtonStyle'
import { TertiaryDisabledStyle } from './TertiaryButton'
import IButton from './IButton'

const SecondaryButton = styled.button<IButton>`
  ${({ small }) =>
    css`
      ${small ? SmallButtonStyle : ButtonStyle}
    `}
  color: #FFFFFF;
  background-color: #4d6474;
  border: none;

  &:hover {
    background-color: #3e505c;
  }
  &:active {
    background-color: #31404a;
  }
  &:disabled {
    ${TertiaryDisabledStyle}
  }
`

export default SecondaryButton
