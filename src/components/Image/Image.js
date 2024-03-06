// Importing using ES6 module
import { useRef } from "react";
import styles from "./Image.module.css";

// Defining Functional based component
function Image(props) {
  // Destructuring the props value
  const { image, handleDelete, index, handelEdit, showViewImage } = props;

  // Creating reference for edit and delete button
  const editRef = useRef();
  const deleteRef = useRef();

  // Function to show edit and delete button on hover
  function onHover() {
    editRef.current.style.display = "block";
    deleteRef.current.style.display = "block";
  }

  // Function to Hide the edit button on cursor exit from the area
  function onExit() {
    editRef.current.style.display = "none";
    deleteRef.current.style.display = "none";
  }

  // Function to delete the Image
  const deleteImage = (e) => {
    e.stopPropagation();
    handleDelete(image, index);
  };

  // Function to Edit the Image
  const editImageData = (e) => {
    e.stopPropagation();
    handelEdit(image, index);
  };

  // Returning the Jsx
  return (
    <>
      <div
        className={styles.cardContainer}
        onMouseEnter={onHover}
        onMouseLeave={onExit}
        onClick={() => showViewImage(index)}
      >
        <div className={styles.btnEdit} ref={editRef}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4476/4476194.png"
            alt="Edit"
            onClick={editImageData}
          />
        </div>
        <div className={styles.btnDelete} ref={deleteRef} onClick={deleteImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
            alt="delete"
          />
        </div>
        {/* album logo */}
        <div className={styles.cardImage}>
          <img src={image.url} alt="life" />
        </div>

        {/* album name*/}
        <div className={styles.cardName}>{image.name}</div>
      </div>
    </>
  );
}

// Exporting using default export
export default Image;
