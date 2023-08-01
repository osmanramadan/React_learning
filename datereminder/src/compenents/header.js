import React from "react";
import { Row,Col } from "react-bootstrap";

const  Header=(props)=>{

    return (
    <div>

    <Row className="justify-content-center">
        <Col sm="8" className="my-2 fs-2"> اليوم  لديك  {props.data.length}  مواعيد</Col>
    </Row> 

    </div>
    )
}

export default Header