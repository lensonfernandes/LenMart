import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar2() {
  return (
    <>
   
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LenMart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="active">Home</Nav.Link>
            <Nav.Link href="#categories" className="active">Categories</Nav.Link>
            <Nav.Link href="#pricing" className="active">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    
    </>
  );
}

export default NavBar2;