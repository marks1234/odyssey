import { useState } from "react";
import { Navbar, Button, Nav, Offcanvas } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar className='nav' expand='lg'>
				<Button variant='primary'>Sign Up</Button>
				<Navbar.Brand className='mx-auto'>Your Logo</Navbar.Brand>
				<Nav.Link onClick={handleShow}>
					{/* This is a basic 3-line "hamburger" icon. You can replace with an icon component or image */}
					&#9776;
				</Nav.Link>
			</Navbar>

			<Offcanvas show={show} onHide={handleClose} placement='end'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{/* Contents similar to GitHub's slide-out window can be placed here */}
					Your content here
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default NavBar;
