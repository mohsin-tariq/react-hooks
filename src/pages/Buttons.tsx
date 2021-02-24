import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Container,
  Column,
} from '../components'

const Buttons = (): JSX.Element => (
  <div>
    <Container>
      <Column>
        <h1>Normal</h1>
      </Column>
      <Column>
        <h1>Small</h1>
      </Column>
      <Column>
        <h1>Disabled</h1>
      </Column>
    </Container>
    <Container>
      <Column>
        <PrimaryButton type="button">Primary CTA</PrimaryButton>
      </Column>
      <Column>
        <PrimaryButton type="button" small>
          Primary CTA
        </PrimaryButton>
      </Column>
      <Column>
        <PrimaryButton type="button" disabled>
          Primary CTA
        </PrimaryButton>
      </Column>
    </Container>
    <Container>
      <Column>
        <SecondaryButton type="button">Secondary CTA</SecondaryButton>
      </Column>
      <Column>
        <SecondaryButton type="button" small>
          Secondary CTA
        </SecondaryButton>
      </Column>
      <Column>
        <SecondaryButton type="button" disabled>
          Secondary CTA
        </SecondaryButton>
      </Column>
    </Container>
    <Container>
      <Column>
        <TertiaryButton type="button">Tertiary CTA</TertiaryButton>
      </Column>
      <Column>
        <TertiaryButton type="button" small>
          Tertiary CTA
        </TertiaryButton>
      </Column>
      <Column>
        <TertiaryButton type="button" disabled>
          Tertiary CTA
        </TertiaryButton>
      </Column>
    </Container>
    <Container style={{ backgroundColor: '#555555', padding: '2rem 0' }}>
      <Column>
        <TertiaryButton type="button" light>
          Tertiary(L) CTA
        </TertiaryButton>
      </Column>
      <Column>
        <TertiaryButton type="button" light small>
          Tertiary(L) CTA
        </TertiaryButton>
      </Column>
      <Column>
        <TertiaryButton type="button" disabled light>
          Tertiary(L) CTA
        </TertiaryButton>
      </Column>
    </Container>
  </div>
)

export default Buttons
