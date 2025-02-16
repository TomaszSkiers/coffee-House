import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cartSlice'
import { FakeTextField } from './FakeTextField'
import { useTheme } from '@emotion/react'

export function ProductList() {
  const cart = useSelector(selectCartItems)
  const theme = useTheme()

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: '4px',
        mt: 2,
        p: 2,
      }}
    >
      {cart.map((product, index) => (
        <Box
          key={product.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pb: '1px',
          }}
        >
          <FakeTextField
            label={index + 1}
            value={
              <>
                {product.title} / quantity:
                <span
                  style={{
                    color: theme.palette.customGreen,
                    fontWeight: 'bold',
                  }}
                >
                  {product.quantity}
                </span>{' '}
                / price:
                <span
                  style={{
                    color: theme.palette.customGreen,
                    fontWeight: 'bold',
                  }}
                >
                  {product.price * product.quantity} $
                </span>
              </>
            }
            sx={{ mt: 1, width: '100%' }}
          />
        </Box>
      ))}
    </Box>
  )
}

