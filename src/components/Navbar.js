import { Link } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"

function NavbarItem() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to="/" className="navbar-brand">
              Marvel
            </Link>
            <Nav className="me-auto">
              <Link to="/add-character" className="nav-link">
                Add
              </Link>
            </Nav>

            <Nav>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
