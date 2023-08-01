
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Zoom from 'react-reveal/Zoom';



function Carditem({items}) {

    
    return (

    <Zoom>
    {
    <Row xs={1} sm={2} className="card-list my-5">
    {items.length? items.map((item, index) => (
        <Col key={index} sm={12} className='my-2'>
        
        <Card className='d-flex justify-content-between flex-row'>
            <div className='d-flex justify-content-between flex-row'>
            <Image src={item.imgUrl} rounded />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {
                item.description
            }
            </Card.Text>
            </Card.Body>
            </div>
            <div className='font-weight-bold my-3 mx-2 price'>
                {item.price} 
            </div>
        </Card>
        </Col>
    )):<h3 sm='12' className="text-center d-flex justify-content-center flex-column">لا يوجد اصناف</h3>}
    </Row>
        }
    </Zoom>
);
}

export default Carditem;