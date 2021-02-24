import { render, screen } from '../../../testUtils'
import { SecondaryButton } from '../../../components/Buttons'


describe('Secondary', () => {
  it('render Snapshot ', () => {
    const { asFragment } = render(<SecondaryButton type="button">Secondary</SecondaryButton>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Normal Button: verify background color, height and padding set to it ', () => {
    render(<SecondaryButton type="button">Secondary</SecondaryButton>)
    expect(screen.getByText('Secondary')).toHaveStyle('background-color: #4d6474')
    expect(screen.getByText('Secondary')).toHaveStyle('min-height: 4rem')
    expect(screen.getByText('Secondary')).toHaveStyle('padding: 0 2rem')
  })

  it('Small Button: verify background color, height and padding set to it ', () => {
    render(<SecondaryButton type="button" small>Secondary</SecondaryButton>)
    expect(screen.getByText('Secondary')).toHaveStyle('background-color: #4d6474')
    expect(screen.getByText('Secondary')).toHaveStyle('min-height: 3rem')
    expect(screen.getByText('Secondary')).toHaveStyle('padding: 0 1rem')
  })

  it('Disabled: verify background color', () => {
    render(<SecondaryButton type="button" disabled>Secondary</SecondaryButton>)
    expect(screen.getByText('Secondary').closest('button')).toBeDisabled()
    expect(screen.getByText('Secondary')).toHaveStyle('color: #252525')
    expect(screen.getByText('Secondary')).toHaveStyle('background-color: #fff')
    expect(screen.getByText('Secondary')).toHaveStyle('cursor: not-allowed')
  })
})