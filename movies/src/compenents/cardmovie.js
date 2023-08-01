import { useState } from "react";
import { Card } from "react-bootstrap";
import { Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.jpg';

function Cardmovie({movie}){
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);

  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Col xs="6" sm="6" md="4" lg="3">
    <Link to={'/movie/' + movie.id}>
    <Card   className={`card-movie ${isHovered ? 'hovered' : ''} my-2 mx-1`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    {
      movie.poster_path ? <Card.Img variant="top" alt="image" 
        className="card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      /> :
      <Card.Img alt="image" 
        className="card-image"
        src={notfound}
      />

    }
    {isHovered && (
        <div className="overlay">
        <p className="overlay-text">
        <p>اسم الفيلم: {movie.title}</p>
        <p>تاريخ الاصدار: {movie.release_date}</p>
        <p>عدد المقيمين:{movie.vote_count}</p>
        <p>التقييم:{movie.vote_average}</p>
        </p>
        </div>
      )
      }
    </Card>
  </Link>
  </Col>
  );
}
export default Cardmovie;