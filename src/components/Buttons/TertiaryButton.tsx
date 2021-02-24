import styled, { css } from 'styled-components'
import ButtonStyle from './ButtonStyle'
import SmallButtonStyle from './SmallButtonStyle'
import IButton from './IButton'

interface ITertiaryButton extends IButton {
  readonly light?: boolean
}

export const TertiaryDisabledStyle = css`
  color: #252525;
  background-color: #fff;
  border: 1px solid #252525;
  opacity: 0.5;
`

const TertiaryStyle = css`
  color: #252525;
  background-color: #fff;
  border: 1px solid #252525;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
  &:disabled {
    ${TertiaryDisabledStyle}
  }
`

const TertiaryStyleLight = css`
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TertiaryButton = styled.button<ITertiaryButton>`
  ${({ small }) =>
    css`
      ${small ? SmallButtonStyle : ButtonStyle}
    `}
  ${({ light }) =>
    css`
      ${light ? TertiaryStyleLight : TertiaryStyle}
    `}
`

export default TertiaryButton
