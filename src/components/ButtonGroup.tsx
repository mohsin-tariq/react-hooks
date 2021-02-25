import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  button:not(:last-child) {
    margin-right: 1rem;
  }
`

export default ButtonGroup
