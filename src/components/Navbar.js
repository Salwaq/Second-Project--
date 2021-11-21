import { Link } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"
import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"

function NavbarItem() {
  const { logout } = useContext(MarvilContext)
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to="/" className="navbar-brand">
              Marvel
            </Link>

            <Nav className="ms-auto">
              {localStorage.tokenCharacter === undefined ? (
                <>
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                  <div className="nav-link" onClick={logout}>
                    Logout
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
