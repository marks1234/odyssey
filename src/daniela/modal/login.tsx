import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "../../mauno/login";
import "../../mauno/App.css";
import { useAuth } from "../../firebase";

// import Register from '../../mauno/register';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useAuth();
  if (auth.loading) {
    return <></>;
  }
  if (auth.loggedIn) {
    return (
      <Button className="custom-button" onClick={auth.signOut}>
        logout
      </Button>
    );
  }

  return (
    <>
      <Button className="custom-button" onClick={handleShow}>
        login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="align-items-center">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-left">
          <Login />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
