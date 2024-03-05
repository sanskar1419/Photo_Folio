import styles from "./ImageViewer.module.css";

function ImagesViewer(props) {
  const { disableViewImage, image, incrementIndex, decrementIndex } = props;
  //   console.log(image);
  return (
    <>
      <div className={styles.imagesContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/892/892639.png"
          alt="left"
          className={styles.btnLeft}
          onClick={decrementIndex}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/892/892655.png"
          alt="right"
          className={styles.btnRight}
          onClick={incrementIndex}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828527.png"
          alt="cross"
          className={styles.btnClose}
          onClick={disableViewImage}
        />
        <div className={styles.imageContainer}>
          <img src={image.url} alt="life" />
        </div>
      </div>
    </>
  );
}
export default ImagesViewer;
