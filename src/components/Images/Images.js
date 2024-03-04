import { useEffect, useRef, useState } from "react";
import styles from "./Images.module.css";
import { db } from "../../firebaseInit";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ImageForm from "../NewImageForm/NewImageForm";

function Images(props) {
  const [album, setAlbum] = useState({
    id: "",
    createdOn: "",
    images: [],
    name: "",
  });
  const [show, setShow] = useState(false);
  const { openAlbum, goBackHome } = props;

  //   console.log(album);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "albums", openAlbum.albumId), (doc) => {
      setAlbum({ id: doc.id, ...doc.data() });
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (name, url) => {
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

      <ImageForm
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        show={show}
      />

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
