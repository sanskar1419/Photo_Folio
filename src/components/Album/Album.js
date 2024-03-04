import styles from "./Album.module.css";

function Album(props) {
  const { album, settingAlbum } = props;
  // console.log(album);
  return (
    <>
      {/* main container  */}
      <div
        className={styles.cardContainer}
        onClick={() => settingAlbum(album.id)}
      >
        {/* album logo */}
        <div className={styles.cardImage}></div>

        {/* album name*/}
        <div className={styles.cardName}>{album.name}</div>
      </div>
    </>
  );
}

export default Album;
