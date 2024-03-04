import { useEffect, useRef, useState } from "react";
import styles from "./Images.module.css";
import { db } from "../../firebaseInit";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Images(props) {
  const [album, setAlbum] = useState({
    id: "",
    createdOn: "",
    images: [],
    name: "",
  });
  const [show, setShow] = useState(false);
  const { openAlbum, goBackHome } = props;
  const nameRef = useRef();
  const urlRef = useRef();

  //   console.log(album);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "albums", openAlbum.albumId), (doc) => {
      setAlbum({ id: doc.id, ...doc.data() });
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    const name = nameRef.current.value;
    const url = urlRef.current.value;
    const image = {
      name,
      url,
    };

    const albumRef = doc(db, "albums", album.id);
    await updateDoc(albumRef, {
      images: [image, ...album.images],
    });
    handleClose();
  };

  return (
    <div className={styles.imagesMainContainer}>
      <div className={styles.backAndNewImageContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png"
          alt="back-button"
          className={styles.btnBack}
          onClick={goBackHome}
        />
        <Button variant="outline-primary" onClick={handleShow}>
          Add Image
        </Button>
      </div>

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
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {album.images.length <= 0 ? (
        <h1>No Images the album {album.name}</h1>
      ) : (
        <>
          <h1>Lists of all images in {album.name}</h1>
        </>
      )}
    </div>
  );
}

export default Images;
