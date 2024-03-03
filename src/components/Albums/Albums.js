import styles from "./Albums.module.css";
import Button from "react-bootstrap/Button";
import { db } from "../../firebaseInit";

function Albums() {
  return (
    <div className={styles.albumsContainer}>
      <h2>Your Albums</h2>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default Albums;
