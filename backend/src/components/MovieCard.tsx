import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Movie } from "@/interfaces/Movie";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography color="text.secondary">
            {movie.release_year}
          </Typography>
          <Typography variant="body2">
            Directed by: {movie.director}
          </Typography>
          <Typography variant="body1">
            {movie.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default MovieCard;

