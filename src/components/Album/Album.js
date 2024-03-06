// Importing css module type styling file
import styles from "./Album.module.css";

// Defining the functional based component
function Album(props) {
  // Destructuring the props
  const { album, settingAlbum } = props;

  // Returning the JSX Content
  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => settingAlbum(album.id)}
      >
        <div className={styles.cardImage}></div>
        <div className={styles.cardName}>{album.name}</div>
      </div>
    </>
  );
}

// Exporting using default export
export default Album;
