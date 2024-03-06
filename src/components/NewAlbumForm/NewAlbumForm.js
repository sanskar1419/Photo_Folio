// Importing using ES6 Module
import { useRef } from "react";
import styles from "./NewAlbumForm.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Defining Functional based component
function NewAlbumForm(props) {
  const inputRef = useRef();
  const { onAlbumFormSubmit } = props;

  // Function to handel form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onAlbumFormSubmit(inputRef.current.value);
    handleClear();
  };

  // Function to clear inputRef current value
  const handleClear = () => {
    inputRef.current.value = "";
  };

  // Returning the JSX
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

// Exporting using Default Export
export default NewAlbumForm;
