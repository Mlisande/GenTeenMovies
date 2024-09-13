import React, {useState} from 'react';
import { Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from "next/link";

const Header: React.FC = () =>{ // React.FC est ici le type. C'est un type de React pour functional component

    const [value, setValue] = useState('gallery');  // Définir "gallery" comme l'onglet par défaut

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);  // Mettre à jour la valeur de l'onglet sélectionné
    };
    return (
        <AppBar position='sticky' sx={{backgroundColor:"background.default"}} >
            <Toolbar>
                <Typography variant='h5' component='h1'  
                    sx={{ flexGrow: 1, color:'text.primary' }}>
                        GENTEENMOVIES
                </Typography>
                <Tabs value={value}>
                   <Tab label='Gallery' value='gallery' component={Link}  href="/gallery"sx={{color:'text.primary', fontWeight:'300'}}></Tab>
                    <Tab label='Quizz' value='quizz' sx={{color:'text.primary', fontWeight:'300'}}></Tab>   
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

