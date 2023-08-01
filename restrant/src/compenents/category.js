import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { items } from "../data"
import { Roll } from "react-reveal"

const Category=(props)=>{
const  [cate,setCate] = useState([])

const handlechange=(cat)=>{
    props.change(cat)
}

const getDistinctCategories = (items) => {
    const categoriesSet = new Set(['الكل']);
    items.forEach((item) => {
    categoriesSet.add(item.category);
    });
    return Array.from(categoriesSet);
};

useEffect(()=>{
    const distinctCategories = getDistinctCategories(items);
    setCate(distinctCategories)
},[])
    
    return (
        <div>
        <Row>
            <Col sm="12" className="d-flex justify-content-center text-center flex-row">
            <Roll>
            {
            cate.length > 1 ? ( cate.map((item)=>{
                return (
            <div key={Math.random()}>
            <button 
            onClick={(e) =>
            {   
            handlechange(e.target.value)
            }}
            className="cate-box mx-2" value={item}>
            {item}
            </button>
            </div>
            )})):<h1>loading</h1>
            }
            </Roll>
    </Col>
    </Row>
        </div>
    )
}

export default Category