import { Box, Container, Typography } from '@mui/material';

export const Dashboard = () => {
  // co ma być w dashboard:
  // imie i nazwisko uzytkownika
  // jego zamówienia
  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100%' }}>
      <Box>
        <Typography variant="h2">Here will be dashbord component</Typography>
      </Box>
    </Container>
  );
};
