'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link,
} from '@mui/material';
import axios from 'axios';
import logo from '../assets/img/logo_trans.png'; // Assure-toi que le chemin est correct
import { useRouter } from 'next/navigation';

const SignupForm: React.FC = () => {
  const router = useRouter();
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h5"
        align="center"
        sx={{ marginTop: '2rem', color: 'primary.dark' }}
      >
        Create an Account
      </Typography>
      <Typography
        variant="h5"
        align="center"
        onClick={() => router.push('/login')}
        sx={{ marginTop: '1rem', cursor: 'pointer', color: 'primary.dark' }}
      >
        Already have an account? Login here.
      </Typography>
      <Box component="form" sx={{ width: '100', marginTop: '10px' }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '20px' }}
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
