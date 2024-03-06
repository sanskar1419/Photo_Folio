// Importing required method,function,hooks etc.
import styles from "./Albums.module.css";
import Button from "react-bootstrap/Button";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";
import NewAlbumForm from "../NewAlbumForm/NewAlbumForm";
import Images from "../Images/Images";
import Spinner from "react-spinner-material";

// Creating functional component
function Albums() {
  // Destructuring the useFetch Hooks values
  const {
    loading,
    albums,
    showAlbumForm,
    openAlbum,
    toggleAlbumForm,
    onAlbumFormSubmit,
    settingAlbum,
    goBackHome,
  } = useFetch();

  // Returning the jsx content
  return (
    <>
      {!openAlbum.open ? (
        <div className={styles.albumsContainer}>
          <h2>Your Albums</h2>
          {/* Dynamically Setting the class of Button */}
          <Button
            variant={showAlbumForm ? "danger" : "primary"}
            onClick={toggleAlbumForm}
          >
            {/* Showing Album form on when the showAlbumForm is true */}
            {showAlbumForm ? "Cancel Album Creation" : "Add New Album"}
          </Button>
          {showAlbumForm ? (
            <NewAlbumForm onAlbumFormSubmit={onAlbumFormSubmit} />
          ) : null}
          <div className={styles.albumContainer}>
            {/* looping over all the albums in array and showing them one by one */}
            {albums.map((album, index) => (
              <Album key={index} album={album} settingAlbum={settingAlbum} />
            ))}
          </div>
        </div>
      ) : (
        <Images openAlbum={openAlbum} goBackHome={goBackHome} />
      )}
      {loading ? (
        <div>
          <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
        </div>
      ) : null}
    </>
  );
}

// Exporting using default export
export default Albums;
