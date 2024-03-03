import styles from "./Album.module.css";

function Album(props) {
  const { album } = props;
  return (
    <>
      {/* main container  */}
      <div className={styles.cardContainer}>
        {/* album logo */}
        <div className={styles.cardImage}></div>

        {/* album name*/}
        <div className={styles.cardName}>{album.name}</div>
      </div>
    </>
  );
}

export default Album;
