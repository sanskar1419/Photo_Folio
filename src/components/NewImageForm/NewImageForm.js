import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ImageForm(props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { handleSubmit, handleClose, show, updateAlbum, updateValue } = props;

  // if (updateAlbum) {
  //   nameRef.current.value = updateValue.name;
  //   urlRef.current.value = updateValue.url;
  // }

  useEffect(() => {
    if (updateValue) {
      // storing value of image inside the input box when click on edit
      setName(updateValue.name);
      setUrl(updateValue.url);
    }
  }, [updateValue]);

  const clearInputs = () => {
    setName("");
    setUrl("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(name, url);
    clearInputs();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {updateAlbum ? "Update Image" : "Add an Image"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>File Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type Name here.."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>File URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Type URL here.."
              autoFocus
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ImageForm;
