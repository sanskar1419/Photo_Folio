import styles from "./Albums.module.css";
import Button from "react-bootstrap/Button";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";
import NewAlbumForm from "../NewAlbumForm/NewAlbumForm";
import Images from "../Images/Images";
import Spinner from "react-spinner-material";

function Albums() {
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
  // console.log(openAlbum);
  return (
    <>
      {!openAlbum.open ? (
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

export default Albums;
