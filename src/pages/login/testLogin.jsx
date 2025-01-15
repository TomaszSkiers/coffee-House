import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FormContextProvider } from '../../contexts/signIn-login-context/FormContextProvider';
import { CommonTextField } from '../../components/common-inputs/CommonTextField';
import { z } from 'zod';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, 'The password field must contain at least eight characters'),
});

export const Login = () => {
  const onSubmit = async (data) => {
    try {
      // Pobierz użytkownika na podstawie e-maila
      const response = await axios.get(`http://localhost:3000/users?email=${data.email}`);
      const user = response.data[0]; // JSON Server zwraca tablicę użytkowników

      if (!user) {
        alert('Invalid email or password');
        return;
      }

      // Porównaj hasło z hasłem w bazie danych
      const isPasswordValid = await bcrypt.compare(data.password, user.password);

      if (!isPasswordValid) {
        alert('Invalid email or password');
        return;
      }

      // Logowanie zakończone sukcesem
      alert('Login successful!');
      console.log('User logged in:', user);

      // Możesz zapisać token użytkownika w localStorage lub przejść na inną stronę
      // localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <FormContextProvider onSubmit={onSubmit} schema={schema} component="form" noValidate sx={{ mt: 1 }}>
          <CommonTextField margin="normal" fullWidth label="Email Address" name="email" autoFocus />
          <CommonTextField margin="normal" fullWidth label="Password" type="password" name="password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/sign-up" variant="body2" component={RouterLink}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </FormContextProvider>
      </Box>
    </Container>
  );
};
