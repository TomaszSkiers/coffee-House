import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
}

export function CustomDialog({
  open,
  onClose,
  title,
  children,
  onlyClose = false,
}) {
  const theme = useTheme()

  return (
    <Dialog open={open} onClose={onClose} disableEnforceFocus>
      {title && (
        <DialogTitle
          color="info"
          sx={{ textAlign: 'center', color: theme.palette.customGreen }}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          sx={{
            ...buttonStyle,
            flexGrow: onlyClose ? 1 : 0, // Jeśli onlyClose === true, przycisk zajmie całe miejsce
          }}
          variant='contained'
          startIcon={<HighlightOffIcon />}
          onClick={onClose}
          
        >
          { !onlyClose ? 'cancel' : 'close'}
        </Button>
        {!onlyClose ? (
          <Button
            sx={buttonStyle}
            variant='contained'
            startIcon={<CheckCircleIcon color="secondary" />}
          >
            Confirm
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  )
}

/**
 * przed wysłaniem zamówienia sprawdzić czy wybrano metodę płatności albo ustawić jakąś domyślną
 *
 *
 * tu muszę sobie wszystkie informacji użyte w zamówieniu, użytkownik, listę produktów, podsumowanie ceny
 * metodę płatności, numer zamówienia zapisać do store, i to był by koniec zamówienia
 * jeszcze może jakaś informacjia o
 */
