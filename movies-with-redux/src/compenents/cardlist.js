import React, { useEffect, useState } from "react";
import Cardmovie from './cardmovie';
import PaginationComponent from './pagination'
import { Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllMovie } from '../redux/actions/movieAction'


function Cardlist(){
  const [movies, setMovies] = useState([])
  const dataMovies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

                             // ********************************** // 
  useEffect(() => {
    dispatch(getAllMovie())
  }, [])

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])

    return (
      <Zoom>
      <div className='card-list my-3'>
          <Row className='d-flex justify-content-between flex-row'>
          {
            movies.length ? movies.map((item) => 
            {
            return (
              <Cardmovie id={item.id} movie={item}/>
                  )
            }
        )
        :<h1 className='text-center'>....Waiting</h1>
        }
        {
          movies.length >= 1 ? (<PaginationComponent/>) : null
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