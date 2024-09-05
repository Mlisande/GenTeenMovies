import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#2a8e5c', // vert foncé
        light:'#5abf89',
        dark:'#1e6f47'
      },
      secondary: {
        main: '#ffbbf5', // rose
        light:'#ffd7fa',
        dark:'#e38bc3'
      },
      background: {
        default: '#fefcf8', // Background global du site
        paper: '#f0e7dc', // Background panel ou card
      },
      text: {
        primary: '#000000', // Couleur du texte par défaut
        secondary: '#6c757d', // Gris pour les sous-titres
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif", // Police par défaut
      h5: {
        fontWeight: 700,
        fontSize: '1.5rem', // 
      },
      h6: {
        fontWeight: 400,
        fontSize: '1.2rem', // Sous-titres
      },
      subtitle1: {
        color: '#6c757d', // Couleur des sous-titres dans le footer
      },
      button: {
        fontWeight: 700,
      },
    },
  });
  
  export default theme;