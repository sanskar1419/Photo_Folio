import styles from "./Albums.module.css";
import Button from "react-bootstrap/Button";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";
import NewAlbumForm from "../NewAlbumForm/NewAlbumForm";

function Albums() {
  const {
    loading,
    albums,
    showAlbumForm,
    openAlbum,
    toggleAlbumForm,
    onAlbumFormSubmit,
  } = useFetch();
  return (
    <div className={styles.albumsContainer}>
      <h2>Your Albums</h2>
      <Button
        variant={showAlbumForm ? "danger" : "primary"}
        onClick={toggleAlbumForm}
      >
        {showAlbumForm ? "Cancel Album Creation" : "Add New Album"}
      </Button>
      {showAlbumForm ? (
        <NewAlbumForm onAlbumFormSubmit={onAlbumFormSubmit} />
      ) : null}
      <div className={styles.albumContainer}>
        {/* looping over all the albums in array and showing them one by one */}
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Albums;
