import React from 'react';
import Image from 'next/image';
import { Grid2, Typography, Button } from '@mui/material';
import TeenMovies from '../app/images/teenMovie.png';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <main
        style={{
          // style de page.module.css
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          minHeight: '80vh',
        }}
      >
        <Grid2 container spacing={4} marginTop={10}>
          <Grid2
            size={{ xs: 12, md: 7 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Typography variant="h1">
              Explore movies that speak to you.
            </Typography>
            <Typography variant="h5">
              With GenTeenMovies, find the films that resonate with your
              personality and tastes.
            </Typography>
            <Typography variant="h5">
              Each movie is a cinematic adventure tailored just for you.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/gallery"
              sx={{
                width: '200px',
                fontSize: '16px',
                backgroundColor: 'secondary.main',
                color: '#000000',
                marginTop: '2rem',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              Visit our gallery
            </Button>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={TeenMovies}
              alt="GenTeenMovies"
              width={500}
              height={300}
              style={{ borderRadius: '6px' }}
            />
          </Grid2>
        </Grid2>
      </main>
    </>
  );
};

export default Home;
