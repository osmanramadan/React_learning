import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails} from '../redux/actions/movieAction';


function Carddetails(){

  const {id} = useParams()

  const [movie, setmovie] = useState([])
  const movieDetails = useSelector((state) => state.movieDetails.details);
  const dispatch = useDispatch();

                                // ********************************** // 
  useEffect(() => {
    dispatch(getDetails(id))
  }, [])

  useEffect(() => {
    setmovie(movieDetails)
  }, [movieDetails]);

    return (
      <Container>

        <div  className="d-flex  flex-row py-3 my-3  card-details-1">
            <img className="rectangular-image my-1 mx-1" 
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
                      {/* osman mamdoh atia ramadan */}
          <div  className="d-flex align-items-center text-center mx-auto">
            <div className="card-body-details">
              <p className="border-bottom">اسم الفيلم: {movie.title}</p>
              <p className="border-bottom">تاريخ الاصدار: {movie.release_date}</p>
              <p className="border-bottom">عدد المقيمين:{movie.vote_count}</p>
              <p className="border-bottom">التقييم:{movie.vote_average}</p>
            </div>
          </div>
        </div>

        {/* story */}

        <Card className="card-details-2">
          <h1 style={{opacity:"0.8"}} className="mx-3 my-3">القصة:</h1>
          <p className="story-words my-3 mx-4" style={{fontSize:"18px",fontWeight:"500",opacity:"0.8"}}>{movie.overview?movie.overview:"story not found"}</p>
        </Card>

        {/* buttons */}

        <div className="d-flex justify-content-center my-2 mx-2 button-details">
        <Link className="custom-link" to='/'>
        <Button className="btn-details">عوده للرئيسية</Button>
        </Link>
        {
          movie.homepage ? <a className="custom-link" href={movie.homepage}><Button className="btn-details">مشاهدة الفيلم</Button></a>:''
        }
        </div>
      </Container>
      );
}

export default Carddetails;