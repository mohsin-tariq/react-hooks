import { render, screen } from '../../../testUtils'
import { TertiaryButton } from '../../../components/Buttons'


describe('Tertiary', () => {
  it('render Snapshot ', () => {
    const { asFragment } = render(<TertiaryButton type="button">Tertiary</TertiaryButton>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Normal Button: verify background color, height and padding set to it ', () => {
    render(<TertiaryButton type="button">Tertiary</TertiaryButton>)
    expect(screen.getByText('Tertiary')).toHaveStyle('color: #252525')
    expect(screen.getByText('Tertiary')).toHaveStyle('min-height: 4rem')
    expect(screen.getByText('Tertiary')).toHaveStyle('padding: 0 2rem')
  })

  it('Normal Button light: verify background color, height and padding set to it ', () => {
    render(<TertiaryButton type="button" light>Tertiary</TertiaryButton>)
    expect(screen.getByText('Tertiary')).toHaveStyle('color: #ffffff')
    expect(screen.getByText('Tertiary')).toHaveStyle('background-color: transparent')
    expect(screen.getByText('Tertiary')).toHaveStyle('min-height: 4rem')
    expect(screen.getByText('Tertiary')).toHaveStyle('padding: 0 2rem')
  })

  it('Small Button: verify background color, height and padding set to it ', () => {
    render(<TertiaryButton type="button" small>Tertiary</TertiaryButton>)
    expect(screen.getByText('Tertiary')).toHaveStyle('color: #252525')
    expect(screen.getByText('Tertiary')).toHaveStyle('min-height: 3rem')
    expect(screen.getByText('Tertiary')).toHaveStyle('padding: 0 1rem')
  })

  it('Disabled: verify background color', () => {
    render(<TertiaryButton type="button" disabled>Tertiary</TertiaryButton>)
    expect(screen.getByText('Tertiary').closest('button')).toBeDisabled()
    expect(screen.getByText('Tertiary')).toHaveStyle('color: #252525')
    expect(screen.getByText('Tertiary')).toHaveStyle('background-color: #fff')
    expect(screen.getByText('Tertiary')).toHaveStyle('cursor: not-allowed')
  })
})