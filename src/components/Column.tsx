import styled from 'styled-components'
import { breakpoints } from './tools'

const Column = styled.div`
  margin: 0 2rem;

  ${breakpoints.sm} {
    width: 100%;
  }
`

export default Column
