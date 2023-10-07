import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useTheme } from "../../ThemeContext";
import "./navbar.css";
import LoginModal from "../../daniela/modal/login";
import RegisterModal from "../../daniela/modal/register";

function NavBar({}: {}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <Navbar className="nav" expand="lg">
        <Container>
          <Nav.Link onClick={handleShow}>
            {/* This is a basic 3-line "hamburger" icon. You can replace with an icon component or image */}
            &#9776;
          </Nav.Link>
          <Navbar.Brand className="mx-auto">
            <Nav.Link href="/">odyssey</Nav.Link>
          </Navbar.Brand>

          <Nav>
			<LoginModal />
			<RegisterModal />
            {/* <Nav.Link href="/register">signup</Nav.Link> */}
			
            <Button onClick={toggleTheme} variant="outline-primary">
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Contents similar to GitHub's slide-out window can be placed here */}
          {/* Your content here */}
          <p>User page</p>
          <p>Projects</p>
          <p>Resources</p>
          <p>API</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
