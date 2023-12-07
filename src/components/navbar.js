import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

function Navbar1(){
    return(
        
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Employee Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


  
        

    
}
export default Navbar1;