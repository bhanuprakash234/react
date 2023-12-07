import { Container, Image, Nav, Navbar } from "react-bootstrap";

import ShapeExample from "../image";

function MainNavbar(){
    
    return(
        <div   >
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
          
          <Nav className="me-auto">
           
          </Nav>
        </Container>
      </Navbar>
      
      <br /><br />
      
      
      

        </div>
    );
}
export default MainNavbar;