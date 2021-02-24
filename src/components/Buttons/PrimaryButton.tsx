import styled, { css } from 'styled-components'
import ButtonStyle from './ButtonStyle'
import SmallButtonStyle from './SmallButtonStyle'
import { TertiaryDisabledStyle } from './TertiaryButton'
import IButton from './IButton'

const PrimaryButton = styled.button<IButton>`
  ${({ small }) =>
    css`
      ${small ? SmallButtonStyle : ButtonStyle}
    `}
  color: #FFFFFF;
  background-color: #db0011;
  border: none;
  &:hover {
    background-color: #a4000d;
  }
  &:active {
    background-color: #83000a;
  }
  &:disabled {
    ${TertiaryDisabledStyle}
  }
`

export default PrimaryButton
