import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mentor&Apprentice </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#home"> Нүүр</Nav.Link>
            <Nav.Link href="#about"> Бидний тухай</Nav.Link>
            <Nav.Link href="#group"> Манай баг</Nav.Link>
            <Nav.Link href="#news"> Мэдээ</Nav.Link>
            <Nav.Link eventKey={3} href="#feedback">
              Санал хүсэлт
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
