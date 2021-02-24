import { render, screen } from '../../../testUtils'
import { PrimaryButton } from '../../../components/Buttons'


describe('Primary', () => {
  it('render Snapshot ', () => {
    const { asFragment } = render(<PrimaryButton type="button">Primary</PrimaryButton>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Normal Button: verify background color, height and padding set to it ', () => {
    render(<PrimaryButton type="button">Primary</PrimaryButton>)
    expect(screen.getByText('Primary')).toHaveStyle('background-color: #db0011')
    expect(screen.getByText('Primary')).toHaveStyle('min-height: 4rem')
    expect(screen.getByText('Primary')).toHaveStyle('padding: 0 2rem')
  })

  it('Small Button: verify background color, height and padding set to it ', () => {
    render(<PrimaryButton type="button" small>Primary</PrimaryButton>)
    expect(screen.getByText('Primary')).toHaveStyle('background-color: #db0011')
    expect(screen.getByText('Primary')).toHaveStyle('min-height: 3rem')
    expect(screen.getByText('Primary')).toHaveStyle('padding: 0 1rem')
  })

  it('Disabled: verify background color', () => {
    render(<PrimaryButton type="button" disabled>Primary</PrimaryButton>)
    expect(screen.getByText('Primary').closest('button')).toBeDisabled()
    expect(screen.getByText('Primary')).toHaveStyle('color: #252525')
    expect(screen.getByText('Primary')).toHaveStyle('background-color: #fff')
    expect(screen.getByText('Primary')).toHaveStyle('cursor: not-allowed')
  })
})