import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUserObject } from '../../redux/userSlice'
import { omit } from 'lodash'
import { FakeTextField } from './FakeTextField'
import { useTheme } from '@emotion/react'

export function UserData() {
  const userObj = omit(useSelector(selectUserObject), 'accessToken', 'theme')
  const theme = useTheme()

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: '4px',
        p: 2,
        mt: 2,
        position: 'relative',
      }}
    >
      {/**label for user data fields */}
      <Typography
      sx={{
        position: 'absolute',
        top: 0,
        left: '12px',
        transform: 'translateY(-50%)',
        backgroundColor: theme.palette.background.paper,
        px: '4px',
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: 1,
      }}
      >
        user data:</Typography>

      {Object.entries(userObj).map(([key, value]) => (
        <FakeTextField key={key} label={key} value={value} sx={{ mt: 2 }} />
      ))}
    </Box>
  )
}

/**
 ** pobierać dane ze store -> useSelector
 ** w pętli wyświetlić najlepiej po kluczach obiektu, to będzie fajane bo
 ** jeśli dodam później jakieś pola to się automatycznie dopisze,
 ** dobra trza iść po zakupy :>
 *
 ** zrobić jeszcze taką otoczkę na na te wszystkie TextFieldy
 * 
 * 
 * 

 */
