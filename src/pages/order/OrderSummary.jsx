import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { CustomDialog } from './CustomDialog'
import { UserData } from './UserData'
import { useTheme } from '@emotion/react'
import { ProductList } from './ProductsList'

export function OrderSummary() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    console.log('open', open)
  }, [open])

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: 'auto',
        mt: '70px',
        filter: open ? 'blur(1px)' : 'none',
      }}
    >
      <Typography color={theme.palette.customGreen} sx={{p:2}}>ORDER SUMMARY</Typography>

      {/** here will insert component that display user data*/}
      <UserData />

      {/** here will insert component that display list of products */}
      <ProductList />

      {/** here will insert component that display payment methods */}

      <Button onClick={() => setOpen(true)}>open dialog</Button>
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title="confirm order"
      />
    </Box>
  )
}
