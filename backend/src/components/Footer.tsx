import React from 'react';
import { AppBar, Grid2, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  return (
    <footer>
      <AppBar
        position="sticky"
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 'auto',
          bottom: '0',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <Grid2 container direction="column" spacing={1} alignItems="center">
          <Grid2 size={12}>
            <Typography color="text.primary" variant="h3" fontWeight={400}>
              GENTEENMOVIES
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | Nextjs | React | Typescript| PostgreSQL | Material UI`}
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              made with{' '}
              <FavoriteIcon sx={{ color: '#a61e1e', fontSize: 'medium' }} /> by
              &copy; Mélisande MALONGA
            </Typography>
          </Grid2>
        </Grid2>
      </AppBar>
    </footer>
  );
};

export default Footer;
