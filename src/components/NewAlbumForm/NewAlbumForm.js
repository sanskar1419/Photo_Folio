import { useRef } from "react";
import styles from "./NewAlbumForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NewAlbumForm(props) {
  const inputRef = useRef();
  const { onAlbumFormSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAlbumFormSubmit(inputRef.current.value);
    handleClear();
  };

  const handleClear = () => {
    inputRef.current.value = "";
  };

  return (
    <Form className={styles.inputForm} onSubmit={handleSubmit}>
      <h2>Create your album here</h2>
      <InputGroup>
        <Form.Control
          placeholder="Album Name"
          aria-label="Recipient's username with two button addons"
          ref={inputRef}
          required
        />
        <Button variant="success" type="submit">
          Create
        </Button>
        <Button variant="danger" onClick={handleClear}>
          Clear
        </Button>
      </InputGroup>
    </Form>
  );
}

export default NewAlbumForm;
