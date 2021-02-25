import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Paragraph from '../Paragraph'

const regularFontStyle = `
  color: #252525;
  font-size: 1.2rem;
  line-height: 1.5rem;
`
const flex = `
  display:flex;
`
export const CardContainer = styled.div`
  border-top: 0.1rem solid #252525;
  border-bottom: 0.1rem solid #252525;
  width: 100%;
`
export const FlexContainer = styled.div`
  ${flex}
`

export const FlexDetailContainer = styled.div`
  ${flex}
  align-items: flex-end;
  justify-content: space-between;
`
export const RequestControlContainer = styled.div`
  ${flex}
  align-items: center;
  margin-top: 1.5rem;
`

export const ActionsContainer = styled.div`
  ${flex}
  span:not(:last-child) {
    border-right: 1px solid #252525;
  }
  svg {
    font-size: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`

export const RequestDetailContainer = styled.div`
  ${flex}
  align-items: flex-end;
  justify-items: flex-end;
  margin-top: 2rem;
  margin-bottom: 1.8rem;
`

export const Detail = styled.div`
  border-left: 0.1rem solid #252525;
  padding-left: 1rem;
  padding-right: 2.5rem;
`

export const AdditionalDetails = styled.div`
  ${flex}
  margin-bottom: 1.8rem;
`

export const AttachmentsLink = styled.a`
  ${regularFontStyle}
  font-weight: 500;
  text-decoration: underline;
  ${({ right }) =>
    css`
      margin-right: ${right || '0'};
    `}
`

export const FontContainer = styled(FontAwesomeIcon)`
  ${({ height, fontSize, width }) =>
    css`
      height: ${height};
      font-size: ${fontSize};
      width: ${width} !important;
      margin-right: 0.5rem;
    `}
`

export const ParagraphContainer = styled(Paragraph)`
  ${flex}
`

export const Span = styled.span`
  font-weight: 400;
  ${regularFontStyle}
`
