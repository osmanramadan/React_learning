
import Cardmovie from './cardmovie';
import PaginationComponent from './pagination'
import { Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';


function Cardlist({data,pagecount,getpage}){
    return (
      <Zoom>
      <div className='card-list my-3'>
          <Row className='d-flex justify-content-between flex-row'>
          {
            data.length ? data.map((item) => 
            {
            return (
              <Cardmovie id={item.id} movie={item}/>
                  )
            }
        )
        :<h1 className='text-center'>....Waiting</h1>
        }
        {
          data.length >= 1 ? (<PaginationComponent getPage={getpage} pageCount={pagecount} />) : null
        }
        </Row>
        </div>
        </Zoom>
    )
}

export default Cardlist;

// import Cardmovie from './cardmovie';
// import PaginationComponent from './pagination'
// import { Row } from 'react-bootstrap';

// import Zoom from 'react-reveal/Zoom';
// function Cardlist({data,pagecount,getpage}){

//     return (
//       <Zoom>
//       <div className='card-list my-3'>
//           <Row className='d-flex justify-content-between flex-row'>
//           {
//             data.length ? data.map(item => (
            
//             <div className='card my-1'>
//             <Link to={'/movie/' + item.id}><Cardmovie  movie={item}/></Link>
//             </div>
//         ))
//         :<h1 className='text-center'>....Waiting</h1>
//         }
//         {
//           data.length >= 1 ? (<PaginationComponent getPage={getpage} pageCount={pagecount} />) : null
//         }
//         </Row>
//         </div>
//         </Zoom>
//     )
// }

// export default Cardlist;