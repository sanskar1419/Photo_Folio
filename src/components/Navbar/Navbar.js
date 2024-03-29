// Importing required method,function,hooks etc.
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";

// Creating functional component
function NavigationBar() {
  // Returning the JSX Content
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary bg-gradient"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://github.com/sanskar1419/Music-Player/blob/master/assets/Images/header/logo.png?raw=true"
            className={styles.logo}
            alt="logo"
          />{" "}
          PHOTO <span className={styles.headingRight}>FOLIO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
}

// Use default export
export default NavigationBar;
