import React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () =>{ // React.FC est ici le type. C'est un type de React pour functional component
    return (
        <AppBar position='sticky' sx={{backgroundColor:'background.default'}}>
            <Toolbar>
                <Typography variant='h5' component='h1'  
                    sx={{ flexGrow: 1, color:'text.primary' }}>
                        GENTEENMOVIES
                </Typography>
                <Tabs>
                    <Tab label='Gallery' sx={{color:'text.primary', fontWeight:'300'}}></Tab>
                    <Tab label='Quizz' sx={{color:'text.primary', fontWeight:'300'}}></Tab>   
                </Tabs>
                <Button 
                    variant='contained' 
                    sx={{
                        marginLeft:'auto', 
                        backgroundColor:"text.primary",
                        }}>
                        LOGIN
                </Button>
                <Button 
                    variant='contained' 
                    sx={{
                        marginLeft:'10px',
                        backgroundColor:"text.primary"}}>
                        SIGNUP
                </Button>
            </Toolbar>
        </AppBar>
        
    );
};

export default Header;

