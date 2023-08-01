import React from "react";
import { Button, Col, Row } from "react-bootstrap";
const  Footer=({display,clear})=>{
    // const display=()=>{

    //     props.display()
    // }
    // const clear=()=>{

    //     props.clear()
    // }
    return (
        <div>

        <Row className="justify-content-center">
        <Col sm="8" className="py-3 ">

        <Row className="justify-content-between">
        <Col sm="4" className="my-1">
        <Button  className="btn-style" onClick={display} variant="secondary">عرض المواعيد</Button>
        </Col>
        <Col sm="4" >
        </Col>
        <Col sm="4" className="justify-content-evenly">
        <Row>
            <Col sm="2"></Col>
            <Col sm="10" className="my-1">
            <Button className="btn-style" onClick={clear}  variant="secondary">مسح الكل</Button>
            </Col>
        </Row>
        </Col>
        </Row>
        </Col>
        </Row> 
        </div>
    )
}

export default Footer