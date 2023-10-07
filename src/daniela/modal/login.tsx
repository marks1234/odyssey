import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../../mauno/login';
import "../../mauno/App.css";

// import Register from '../../mauno/register';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='custom-button' onClick={handleShow}>
        login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='align-items-center'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Login/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;