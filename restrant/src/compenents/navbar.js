import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample(props) {

const  filter=(word)=>{
   props.filter(word)
  }

  return (
    <Navbar expand="lg" bg='dark' variant='dark'>
    <Container>
        <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
        <Form className="d-flex">
      
        <Form.Control
              type="search"
              placeholder="search"
              className="me-2 mx-2 text-center"
              aria-label="Search"
              onChange={(e)=>(
              filter(e.target.value)
              )  
              }
            
            />
          

        </Form>
    </Container>
    </Navbar>
);
}

export default NavScrollExample;