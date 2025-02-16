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

export function CustomDialog({ open, onClose, title, children }) {
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
          sx={buttonStyle}
          startIcon={<HighlightOffIcon />}
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          sx={buttonStyle}
          startIcon={<CheckCircleIcon color="secondary" />}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}
