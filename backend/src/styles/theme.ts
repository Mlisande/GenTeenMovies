import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(42, 142, 92, 0.3)', // vert foncé
      light: 'rgba(90, 191, 137, 0.2)',
      dark: 'rgba(30, 111, 71, 0.3)',
    },
    secondary: {
      main: 'rgba(255, 187, 245, 0.3)', // rose
      light: '#ffd7fa',
      dark: '#e38bc3',
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
    fontFamily: "'Poppins', sans-serif", // Police par défaut
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem', //
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem', // Sous-titres
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem', //
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.2rem', // Sous-titres
    },
    h5: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '.8rem', // Sous-titres
    },
    subtitle1: {
      color: '#6c757d', // Couleur des sous-titres dans le footer
    },
    button: {
      fontWeight: 600,
    },
  },
});

export default theme;
