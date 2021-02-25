import { css } from 'styled-components'
import { PointStyles } from './ButtonStyle'

const SmallButtonStyle = css`
  display: flex;
  align-items: center;
  min-height: 3rem;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: normal;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
  }
  ${PointStyles}
`

export default SmallButtonStyle
