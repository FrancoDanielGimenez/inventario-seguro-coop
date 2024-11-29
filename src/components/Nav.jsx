import '../styles/Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BarraNav = () =>{
    return(
        <>
       <div className='conteinerNav'>
          <Navbar expand="xl" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/Home">CSPCCJM</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Pc Escritorio</Nav.Link>
                  <Nav.Link href="#link">Notebook</Nav.Link>
                  <Nav.Link href="#link">Nuevo</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        </>
    )
}

export default BarraNav;