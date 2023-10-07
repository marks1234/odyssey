import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../mauno/App.css";
import Register from "../../mauno/register";
import { useAuth } from "../../firebase";

function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const auth = useAuth();
  if (auth.loading) {
    return <></>;
  }

  if (auth.loggedIn) {
    return <></>;
  }

  return (
    <>
      <Button className="custom-button" onClick={handleShow}>
        register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="align-items-center">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
