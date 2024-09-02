import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor:'#f2f35d',
                paddingTop: "1rem",
                paddingBottom: "1rem",
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}
    >
        <Grid2 container direction="column">
          <Grid2 size={12}>
            <Typography color="black" variant="h5">
              GENTENNMOVIES
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
                made with <FavoriteIcon sx={{ color: '#a61e1e',fontSize:"small" }}/> by Mélisande MALONGA
            </Typography>
          </Grid2>
        </Grid2>
    </Box>
    );
};

export default Footer;