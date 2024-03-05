import { useEffect, useRef, useState } from "react";
import styles from "./Images.module.css";
import { db } from "../../firebaseInit";
import { toast } from "react-hot-toast";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ImageForm from "../NewImageForm/NewImageForm";
import Image from "../Image/Image";
import ImagesViewer from "../ImageViewer/ImageViewer";

function Images(props) {
  const [album, setAlbum] = useState({
    id: "",
    createdOn: "",
    images: [],
    name: "",
  });
  const [show, setShow] = useState(false);
  const { openAlbum, goBackHome } = props;
  const [updateAlbum, setUpdateAlbum] = useState(false);
  const [updateValue, setUpdateValue] = useState({ name: "", url: "" });
  const [viewImages, setViewImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //   console.log(album);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "albums", openAlbum.albumId), (doc) => {
      setAlbum({ id: doc.id, ...doc.data() });
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showViewImage = (index) => {
    setViewImage(true);
    setCurrentIndex(index);
    console.log(album.images.length - 1);
  };

  const disableViewImage = () => {
    setViewImage(false);
    setCurrentIndex(0);
  };

  const incrementIndex = () => {
    if (currentIndex >= 0 && currentIndex < album.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const decrementIndex = () => {
    if (currentIndex > 0 && currentIndex <= album.images.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async (name, url) => {
    const image = {
      name,
      url,
    };

    const albumRef = doc(db, "albums", album.id);
    if (!updateAlbum) {
      await updateDoc(albumRef, {
        images: [image, ...album.images],
      });
      toast.success("Image Added Successfully");
    } else {
      await updateDoc(albumRef, {
        images: arrayRemove(updateValue),
      });
      await updateDoc(albumRef, {
        images: arrayUnion(image),
      });
      toast.success("Image Updated Successfully");
      clearUpdate();
    }
    handleClose();
  };

  const handleDelete = async (image, index) => {
    const albumRef = doc(db, "albums", album.id);
    await updateDoc(albumRef, {
      images: arrayRemove(image),
    });
    toast.success("Image Deleted Successfully");
  };

  const clearUpdate = () => {
    setUpdateAlbum(false);
    setUpdateValue({ name: "", url: "" });
  };

  const handelEdit = (image, index) => {
    // console.log("Edit is clicked");
    setUpdateAlbum(true);
    setUpdateValue({ name: image.name, url: image.url });
    // console.log(updateValue);
    handleShow();
    // console.log(nameRef.current);
  };

  return (
    <>
      <div className={styles.imagesMainContainer}>
        {viewImages ? (
          <ImagesViewer
            disableViewImage={disableViewImage}
            image={album.images[currentIndex]}
            incrementIndex={incrementIndex}
            decrementIndex={decrementIndex}
          />
        ) : null}
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
          updateAlbum={updateAlbum}
          updateValue={updateValue}
        />

        {album.images.length <= 0 ? (
          <h1>No Images the album {album.name}</h1>
        ) : (
          <>
            <h1>Lists of all images in {album.name}</h1>
            <div className={styles.imagesContainer}>
              {album.images.map((image, index) => (
                <Image
                  key={index}
                  image={image}
                  handleDelete={handleDelete}
                  index={index}
                  handelEdit={handelEdit}
                  showViewImage={showViewImage}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Images;
