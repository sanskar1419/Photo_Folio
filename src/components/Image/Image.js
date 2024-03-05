import { useRef } from "react";
import styles from "./Image.module.css";

function Image(props) {
  const { image, handleDelete, index, handelEdit } = props;
  const editRef = useRef();
  const deleteRef = useRef();

  function onHover() {
    editRef.current.style.display = "block";
    deleteRef.current.style.display = "block";
  }

  function onExit() {
    editRef.current.style.display = "none";
    deleteRef.current.style.display = "none";
  }

  //   console.log(editRef);

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={onHover}
      onMouseLeave={onExit}
    >
      <div className={styles.btnEdit} ref={editRef}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4476/4476194.png"
          alt="Edit"
          onClick={() => handelEdit(image, index)}
        />
      </div>
      <div
        className={styles.btnDelete}
        ref={deleteRef}
        onClick={() => handleDelete(image, index)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
          alt="delete"
        />
      </div>
      {/* album logo */}
      <div className={styles.cardImage}>
        <img src={image.url} alt="Image" />
      </div>

      {/* album name*/}
      <div className={styles.cardName}>{image.name}</div>
    </div>
  );
}

export default Image;
