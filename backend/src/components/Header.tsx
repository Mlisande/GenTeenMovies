import React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar sx={{backgroundColor:'#f2f35d'}}>
            <Toolbar>
                <Typography variant='h5' component='h1' 
                    sx={{ flexGrow: 1, color: "#000000" }}>
                        GENTEENMOVIES
                </Typography>
                <Tabs>
                    <Tab label='Gallery' sx={{color:'#000000'}}></Tab>
                    <Tab label='Quizz' sx={{color:'#000000'}}></Tab>   
                </Tabs>
                <Button 
                    variant='contained' 
                    sx={{
                        marginLeft:'auto', 
                        background:"#000000"}}>
                        LOGIN
                </Button>
                <Button 
                    variant='contained' 
                    sx={{
                        marginLeft:'10px',
                        background:"#000000"}}>
                        SIGNUP
                </Button>
            </Toolbar>
        </AppBar>
        
    );
};

export default Header;