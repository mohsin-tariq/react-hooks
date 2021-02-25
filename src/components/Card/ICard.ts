export interface RequestTitleProps {
  requestType: string
  amount: string
  iban: string
  location: string
  accountName: string
}

interface Attachment {
  hasAttachment: boolean
  url?: string
}

interface ConfidentialNote {
  hasNote: boolean
  text?: string
}

export interface RequestDetailProps {
  requestReference: string
  requestCategory: string
  requestStatus: string
  attachments: Attachment
  confNote: ConfidentialNote
}

interface ClickEvent {
  text: string
  onClick: React.MouseEvent<HTMLElement> | void
}

export interface RequestControlProps {
  reject: ClickEvent
  authorize: ClickEvent
  type?: string
}

export interface CardProps {
  requestTitle: RequestTitleProps
  requestControl: RequestControlProps
  requestDetail: RequestDetailProps
}
