import React from 'react'
import {  Row, Col } from 'react-bootstrap'
const Header = () => {
    return (
        <Row>
            <Col  sm="12" className="text-center">

                <div  className="title ">قائمه الطعام </div>
                <div  className="d-flex justify-content-center">
                    <p className="underline"></p>
                </div>
            </Col>
        </Row>
    )
}

export default Header