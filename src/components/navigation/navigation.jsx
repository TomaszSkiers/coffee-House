import { useEffect, useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { fetchCategories } from '../../api/products.js';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import { useColorMode } from '../../contexts/color-mode/color-mode-context.jsx';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  color: theme.palette.text.secondary,
}));

export const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const {mode, toggleColorMode} = useColorMode()
  
  const fetchData = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Coffee House
            <CoffeeIcon sx={{ ml: 1 }} />
          </RouterLink>
        </Typography>
        <nav>
          {categories.map(({ id, name }) => (
            <StyledNavLink key={id} to={`/category/${id}`}>
              {name}
            </StyledNavLink>
          ))}
        </nav>
        <Button color="inherit" component={RouterLink} to="/login">
          Login
        </Button>
        <IconButton 
          sx={{ ml: 1 }}
          color="inherit"
          onClick={toggleColorMode}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
