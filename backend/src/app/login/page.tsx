import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h5"
        align="center"
        sx={{ color: 'primary.main', marginTop: '2rem', marginBottom: '2rem' }}
      >
        Log your account
      </Typography>
      <Box component="form" sx={{ width: '100%', marginTop: '10px' }}>
        <TextField
          label="Email"
          type="email"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: '20px' }}
        >
          Log in
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
