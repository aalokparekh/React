import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header()
{
   return(<div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Navbar">Navbar</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contect">Contect</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>)
}
export default Header;