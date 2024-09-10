import React from 'react';
import { AppBar, Box,Grid2, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () =>{
    return (
        <AppBar
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor:'background.default',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                top:'auto',
                bottom:'0',
                padding:'1rem',
            }}
        >
        <Grid2 container direction="column" spacing={1} alignItems="center">
          <Grid2 size={12}>
            <Typography color="text.primary" variant="h5" fontWeight={400} >
              GENTENNMOVIES
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
            <Typography variant="subtitle1">
                made with 
                <FavoriteIcon sx={{ color: '#a61e1e',fontSize:"small" }}/> 
                by Mélisande MALONGA
            </Typography>
          </Grid2>
        </Grid2>
    </AppBar>
    );
};

export default Footer;
