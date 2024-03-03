import styles from "./Albums.module.css";
import Button from "react-bootstrap/Button";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";

function Albums() {
  const { loading, albums, showAlbumForm, openAlbum } = useFetch();
  return (
    <div className={styles.albumsContainer}>
      <h2>Your Albums</h2>
      <Button variant="primary">Add New Album</Button>
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
