import React from "react";
import { Col, Row } from "react-bootstrap";


const  Content=(props)=>{

    return (
      <div >

      <Row className="justify-content-center">
          <Col sm="8"> 
          <div className="rectangle p-2">
          {
                    props.data.length ? 
                    (
                      props.data.map((item) =>
                        {
                        return (
                            <div key={item.id} className="d-flex  justify-content-between border-bottom mx-2 my-2">
                                <div className="img-style">
                                <img className="img-avatar" src="osman.png" alt="sdsd" />
                                </div>
                                <div className="px-3">
                                    <p className="d-inline fs-2">{item.name}</p>
                                    <p className="fs-4">{item.date}</p>
                                </div>
                            </div>
                    )
                    }))
                    :
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          }
          </div>          
          </Col>
      </Row> 
  
      </div>
    )
}

export default Content