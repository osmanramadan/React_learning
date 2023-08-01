import React from "react";
import { useDispatch } from 'react-redux'
import { getAllMovie ,getMovieSearch} from '../redux/actions/movieAction'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import { Col } from 'react-bootstrap';


function NavScrollExample() {

  const dispatch=useDispatch()
  
  const search = (word) => {

    if (word === "") {
      dispatch(getAllMovie())

    } else {
      dispatch(getMovieSearch(word))
  }
  }
  return (
    <Navbar className='navbar'>
    <Container className="d-flex justify-content-between">
    
        <Col xs={2} lg={1} className="d-flex justify-content-center flex-column" >
        <a href='/'><img alt="logo" className='navimg' src={logo}/> </a>
        </Col>
        <Col xs={10} lg={11} className="d-flex justify-content-center text-center flex-column">
        <Form className='search-nav'>
        <i className="fa fa-search"></i>
        <Form.Control
              type="search"
              placeholder="ابحث"
              className="search-input me-2 mx-2"
              aria-label="Search"
              onChange={
              (e)=>(
              search(e.target.value)
              )  
              }
            />
        </Form>
        </Col>
    </Container>
    </Navbar>
);
}

export default NavScrollExample;