import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ImageForm(props) {
  const nameRef = useRef();
  const urlRef = useRef();
  const { handleSubmit, handleClose, show } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>File Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type Name here.."
              ref={nameRef}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>File URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Type URL here.."
              ref={urlRef}
              autoFocus
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="success"
          onClick={() =>
            handleSubmit(nameRef.current.value, urlRef.current.value)
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageForm;
