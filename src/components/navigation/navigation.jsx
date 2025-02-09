import { useEffect, useState } from 'react'
import { Link as RouterLink, NavLink, useNavigate } from 'react-router-dom'
import { fetchCategories } from '../../api/products.js'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import { styled } from '@mui/material/styles'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CoffeeIcon from '@mui/icons-material/LocalCafe'
import { useColorMode } from '../../contexts/color-mode/color-mode-context.jsx'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../redux/userSlice.js'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  color: theme.palette.text.secondary,
}))

//* Navigation
// podłączyć ilość produktów do ikonki

export const Navigation = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const { mode, toggleColorMode } = useColorMode()

  const userName = useSelector(selectUserName)
  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  const fetchData = async () => {
    const data = await fetchCategories()
    setCategories(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        width: '100%',
        maxWidth: '1000px',
        left: '50%',
        transform: 'translateX(-50%)',
        margin: 'auto',
      }}
    >
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
          {userName ? userName : 'login'}
        </Button>
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={toggleColorMode}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => {
            navigate('/cart')
          }}
        >
          <Badge badgeContent={itemsCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
