import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function IgaNavbar() {
  return (
    <div className="iganavbar">
      <Navbar collapseOnSelect expand="lg" bg="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Iga</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#x"><a href="https://twitter.com/igawile">X</a></Nav.Link>
              <Nav.Link href="#instagram"><a href="https://www.instagram.com/igawile/">instagram</a></Nav.Link>
              <Nav.Link href="#youtube"><a href="https://www.youtube.com/@wileiga/videos">YouTube</a></Nav.Link>
              <Nav.Link href="#soundcloud"><a href="https://soundcloud.com/iganels">Soundcloud</a></Nav.Link>
              <Nav.Link href="#bandcamp"> <a href="https://igaxe.bandcamp.com/">bandcamp</a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default IgaNavbar;