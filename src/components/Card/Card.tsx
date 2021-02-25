import RequestTitle from './RequestTitle'
import RequestControls from './RequestControls'
import RequestDetail from './RequestDetail'
import { CardProps } from './ICard'
import { CardContainer, FlexContainer } from './CardStyle'

const Card = ({ requestTitle, requestControl, requestDetail }: CardProps) => (
  <CardContainer>
    <FlexContainer>
      <RequestTitle
        requestType={requestTitle.requestType}
        amount={requestTitle.amount}
        iban={requestTitle.iban}
        location={requestTitle.location}
        accountName={requestTitle.accountName}
      />
      <RequestControls
        authorize={requestControl.authorize}
        reject={requestControl.reject}
      />
    </FlexContainer>
    <RequestDetail
      requestReference={requestDetail.requestReference}
      requestCategory={requestDetail.requestCategory}
      requestStatus={requestDetail.requestStatus}
      attachments={requestDetail.attachments}
      confNote={requestDetail.confNote}
    />
  </CardContainer>
)

export default Card
