import React from 'react';
import Rating from '@mui/material/Rating';
import {Card}from 'react-bootstrap';
import ShowMoreText from "react-show-more-text";

const MovieCard = ({movie}) => {
    return (
        <div className = "movieCard">
  <Card 
  style={{ width: '18rem'  }}>
    <Card.Img variant="top" src={movie.posterURL}/>
  <Card.Body>

      <Card.Title>
      {movie.title}
      </Card.Title>
      <Card.Text>
      <ShowMoreText>
      {movie.description}
      </ShowMoreText>
      </Card.Text>

   <Rating name="read-only" value={movie.rate} readOnly />

  </Card.Body>
  </Card>
        </div>

    )
};
export default MovieCard;