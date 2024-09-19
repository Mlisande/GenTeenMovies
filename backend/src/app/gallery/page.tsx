'use client';

import React, { useState, useEffect } from 'react';
import { Grid2, Typography } from '@mui/material';
import MovieCard from '@/components/MovieCard';
import Movie from '@/interfaces/Movie';

const Gallery: React.FC = () => {
  // État pour stocker les films récupérés depuis l'API
  const [movies, setMovies] = useState<Movie[]>([]); // movies = la variable d'état. Elle va stocker la liste de film récupérée de l'API. Elle est de type Movie[], et [] est la valeur attendue, ici un tableau vide

  useEffect(() => {
    // j'utilise useEffect pour changer l'état inital
    // Fonction pour récupérer les films depuis l'API
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies'); // je vais chercher ma donnée avec un fetch
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // je stocke ma réponse dans data en format json
        setMovies(data); // Mise à jour de l'état avec les films récupérés
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        minHeight: '80vh',
      }}
    >
      <Typography
        variant="h5"
        marginBottom={2}
        sx={{ color: 'secondary.dark' }}
      >
        What's in our bag ?
      </Typography>
      <Typography variant="h1" marginBottom={8}>
        Movie Gallery
      </Typography>
      <Grid2 container spacing={4}>
        {movies.map((movie) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
};

export default Gallery;
