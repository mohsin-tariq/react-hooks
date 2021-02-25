import { Container, Card } from '../components'

const CardsObj = [
  {
    requestReference: 'SET29383ABCH',
    requestId: 'req1',
    requestCategory: 'Payment',
    requestStatus: 'Pending authorisation',
    iban: '1234567890123456',
    country: 'GB',
    accountName: 'KUIML Business Company',
    amount: 'GBP 1,000.00',
    requestType: 'Cancel / recall payment',
    isPrivate: {
      hasNote: false,
    },
    hasAttachments: {
      hasAttachment: false,
    },
  },
  {
    requestReference: 'SET29383ABCH',
    requestId: 'req2',
    requestCategory: 'Payment',
    requestStatus: 'Pending authorisation',
    iban: '1234567890123456',
    country: 'GB',
    accountName: 'KUIML Business Company 2',
    amount: 'GBP 2,000.00',
    requestType: 'Cancel / recall payment',
    isPrivate: {
      hasNote: false,
    },
    hasAttachments: {
      hasAttachment: true,
      url: '#',
    },
  },
  {
    requestReference: 'SET29383ABCH',
    requestId: 'req3',
    requestCategory: 'Payment',
    requestStatus: 'Pending authorisation',
    iban: '1234567890123456',
    country: 'GB',
    accountName: 'KUIML Business Company 3',
    amount: 'GBP 12,000.00',
    requestType: 'Cancel / recall payment',
    isPrivate: {
      hasNote: true,
      text: 'This request can only be seen by you.',
    },
    hasAttachments: {
      hasAttachment: true,
      url: '#',
    },
  },
  {
    requestReference: 'SET29383ABCH',
    requestId: 'req4',
    requestCategory: 'Payment',
    requestStatus: 'Pending authorisation',
    iban: '1234567890123456',
    country: 'GB',
    accountName: 'KUIML Business Company 4',
    amount: 'GBP 101,000.00',
    requestType: 'Cancel / recall payment',
    isPrivate: {
      hasNote: true,
      text: 'This request can only be seen by you.',
    },
    hasAttachments: {
      hasAttachment: false,
    },
  },
]

const Cards = (): JSX.Element => (
  <Container style={{ maxWidth: '800px' }}>
    <h1>Cards</h1>
    {CardsObj.map((card) => (
      <Card
        key={card.requestId}
        requestTitle={{
          requestType: card.requestType,
          amount: card.amount,
          iban: card.iban,
          location: card.country,
          accountName: card.accountName,
        }}
        requestControl={{
          authorize: {
            text: 'Authorize',
            onClick: console.log('Authorize'),
          },
          reject: {
            text: 'Reject',
            onClick: console.log('Reject'),
          },
        }}
        requestDetail={{
          requestReference: card.requestReference,
          requestCategory: card.requestCategory,
          requestStatus: card.requestStatus,
          attachments: card.hasAttachments,
          confNote: card.isPrivate,
        }}
      />
    ))}
  </Container>
)

export default Cards
