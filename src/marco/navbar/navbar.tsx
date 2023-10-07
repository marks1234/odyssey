import { useState } from "react";
import { Navbar, Button, Nav, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function NavBar() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar className='nav' expand='lg'>
				<Container>
					<Nav.Link onClick={handleShow}>
						{/* This is a basic 3-line "hamburger" icon. You can replace with an icon component or image */}
						&#9776;
					</Nav.Link>
					<Navbar.Brand className='mx-auto'>Your Logo</Navbar.Brand>
					{/* <Button variant='primary'>Sign Up</Button> */}
					{/* <Navbar.Collapse className="justify-content-end"> */}
				<Nav>
					<Nav.Link href="/login">login</Nav.Link>
					<Nav.Link href="/register">signup</Nav.Link>
				</Nav>
				</Container>
			</Navbar>

			<Offcanvas show={show} onHide={handleClose} placement='start'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{/* Contents similar to GitHub's slide-out window can be placed here */}
					{/* Your content here */}
					<p>User page</p>
					<p>Projects</p>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default NavBar;
