import { css } from 'styled-components'
import { breakpoints } from '../tools'

const ButtonStyle = css`
  display: flex;
  align-items: center;
  min-height: 4rem;
  padding: 0 2rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: normal;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
  }

  ${breakpoints.lg} {
    width: auto;
  }
  ${breakpoints.sm} {
    width: 100%;
    justify-content: center;
  }
`

export default ButtonStyle
