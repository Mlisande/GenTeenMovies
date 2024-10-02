import React, { useState } from 'react';
import { Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  // React.FC est ici le type. C'est un type de React pour functional component

  const router = useRouter(); // j'installe le hook useRouter ici
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.default' }}>
      <Toolbar>
        <Typography
          variant="h2"
          component="h1"
          onClick={() => router.push('/')}
          sx={{ flexGrow: 1, color: 'text.primary', cursor: 'pointer' }}
        >
          GENTEENMOVIES
        </Typography>
        <Tabs>
          <Tab
            label="Gallery"
            value="gallery"
            onClick={() => router.push('/gallery')}
          ></Tab>
          <Tab label="Quizz" value="quizz"></Tab>
        </Tabs>
        <Button
          variant="contained"
          sx={{
            marginLeft: 'auto',
            backgroundColor: 'text.primary',
          }}
        >
          LOGIN
        </Button>
        <Button
          variant="contained"
          onClick={() => router.push('/signup')}
          sx={{
            marginLeft: '10px',
            backgroundColor: 'text.primary',
          }}
        >
          SIGNUP
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
