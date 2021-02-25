import styled from 'styled-components'
import Title from '../Title'
import Paragraph from '../Paragraph'
import { RequestTitleProps } from './ICard'

const Container = styled.div`
  width: 100%;
`

const RequestTitle = ({
  requestType,
  amount,
  iban,
  location,
  accountName,
}: RequestTitleProps): JSX.Element => (
  <Container>
    <Title>
      {requestType}, {amount}
    </Title>
    <Paragraph>{`${iban} (${location}), ${accountName}`}</Paragraph>
  </Container>
)

export default RequestTitle
