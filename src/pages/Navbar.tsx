import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">
      Home
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/buttons">
          Buttons
        </NavLink>
        <NavLink className="nav-item nav-link" to="/cards">
          Cards
        </NavLink>
      </div>
    </div>
  </nav>
)

export default Navbar
