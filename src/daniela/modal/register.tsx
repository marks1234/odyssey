import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../mauno/App.css";
import Register from '../../mauno/register';

function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='align-items-center'>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Register/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;