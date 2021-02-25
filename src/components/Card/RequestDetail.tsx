import {
  faExclamationCircle,
  faPaperclip,
  faFile,
} from '@fortawesome/free-solid-svg-icons'

import Label from '../Label'
import Paragraph from '../Paragraph'
import { RequestDetailProps } from './ICard'
import {
  RequestDetailContainer,
  Detail,
  ParagraphContainer,
  FontContainer,
  AdditionalDetails,
  AttachmentsLink,
  Span,
  FlexContainer,
  FlexDetailContainer,
} from './CardStyle'

const RequestDetail = ({
  requestReference,
  requestCategory,
  requestStatus,
  attachments,
  confNote,
}: RequestDetailProps): JSX.Element => (
  <FlexDetailContainer>
    <FlexContainer style={{ flexDirection: 'column' }}>
      <RequestDetailContainer>
        <Detail>
          <Label>Request reference</Label>
          <Paragraph>{requestReference}</Paragraph>
        </Detail>
        <Detail>
          <Label>Category</Label>
          <Paragraph>{requestCategory}</Paragraph>
        </Detail>
        <Detail>
          <Label>Request status</Label>
          <ParagraphContainer>
            <span>
              <FontContainer
                height="1.5rem"
                width="1.5rem"
                fontSize="1.5rem"
                icon={faExclamationCircle}
              />
            </span>
            {requestStatus}
          </ParagraphContainer>
        </Detail>
      </RequestDetailContainer>
      {(confNote.hasNote || attachments.hasAttachment) && (
        <AdditionalDetails>
          {attachments.hasAttachment && (
            <AttachmentsLink right="2rem" href={attachments.url}>
              <span>
                <FontContainer
                  height="1.3rem"
                  width="1.2rem"
                  fontSize="1.2rem"
                  icon={faPaperclip}
                />
              </span>
              Manage Attachments
            </AttachmentsLink>
          )}
          {confNote.hasNote && (
            <Paragraph>
              <span>
                <FontContainer
                  height="1.4rem"
                  width="1.4rem"
                  fontSize="1.2rem"
                  icon={faFile}
                />
              </span>
              Private request.
              <Span>{confNote.text}</Span>
            </Paragraph>
          )}
        </AdditionalDetails>
      )}
    </FlexContainer>
    <Paragraph style={{ marginBottom: '1.8rem' }}>Full Details</Paragraph>
  </FlexDetailContainer>
)

export default RequestDetail
