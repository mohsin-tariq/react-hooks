import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons'
import { SecondaryButton, TertiaryButton } from '../Buttons'
import ButtonGroup from '../ButtonGroup'
import { RequestControlProps } from './ICard'
import { RequestControlContainer, ActionsContainer } from './CardStyle'

const RequestControls = ({
  reject,
  authorize,
  type,
}: RequestControlProps): JSX.Element => (
  <RequestControlContainer>
    <ActionsContainer>
      <span>
        <FontAwesomeIcon icon={faFilePdf} />
      </span>
      <span>
        <FontAwesomeIcon icon={faPrint} />
      </span>
    </ActionsContainer>
    <ButtonGroup>
      <TertiaryButton type={type} onClick={reject.onClick}>
        {reject.text}
      </TertiaryButton>
      <SecondaryButton type={type} onClick={authorize.onClick}>
        {authorize.text}
      </SecondaryButton>
    </ButtonGroup>
  </RequestControlContainer>
)

RequestControls.defaultProps = {
  type: 'button',
}

export default RequestControls
