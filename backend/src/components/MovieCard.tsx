import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Movie from '@/interfaces/Movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'primary.light',
        padding: '1.3rem',
        borderRadius: '2rem',
        border: '2px solid transparent',
        textAlign: 'center',
        transition: '0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'transparent',
        },
      }}
    >
      <CardContent>
        <Typography variant="h3" component="div">
          {movie.title}
        </Typography>
        <Typography color="text.secondary">{movie.release_year}</Typography>
        <Typography variant="body2">Directed by: {movie.director}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
