import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';
import { useState } from 'react';

const API_URL = "http://localhost:4001"; // Adres backendu

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
};

export function CustomDialog({
  open,
  onClose,
  title,
  children,
  onlyClose = false,
}) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false); // Dodanie stanu ładowania
  const [errorMessage, setErrorMessage] = useState(null); // Stan na błędy API

  // 🔹 Funkcja do wysyłania zamówienia z tokenem JWT
  const placeOrder = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const token = localStorage.getItem("accessToken"); // Pobranie tokena dynamicznie
      // console.log("🔑 Token JWT:", token); // Sprawdzenie, czy token jest poprawny
      if (!token) {
        throw new Error("User not authenticated. Please log in.");
      }

      const orderData = {
        items: [
          { productId: 101, name: "Laptop", price: 2500, quantity: 1 },
          { productId: 102, name: "Mouse", price: 50, quantity: 2 },
        ],
        totalPrice: 2600,
        shippingAddress: {
          street: "123 Main St",
          city: "Warszawa",
          zipCode: "00-001",
          country: "Polska",
        },
        paymentMethod: "credit_card",
      };

      const response = await axios.post(`${API_URL}/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`, // Token JWT w nagłówku
        },
      });

      console.log("✅ Zamówienie złożone pomyślnie:", response.data);
      onClose(); // Zamknięcie okna dialogowego po sukcesie
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Wystąpił błąd.");
      console.error("❌ Błąd przy składaniu zamówienia:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <DialogContent>
        {children}
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {errorMessage}
          </p>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            ...buttonStyle,
            flexGrow: onlyClose ? 1 : 0, // Jeśli onlyClose === true, przycisk zajmie całe miejsce
          }}
          variant="contained"
          startIcon={<HighlightOffIcon />}
          onClick={onClose}
          disabled={loading} // Blokada przycisku podczas ładowania
        >
          {!onlyClose ? 'Cancel' : 'Close'}
        </Button>
        {!onlyClose ? (
          <Button
            sx={buttonStyle}
            variant="contained"
            startIcon={<CheckCircleIcon color="secondary" />}
            onClick={placeOrder}
            disabled={loading} // Blokada przycisku podczas ładowania
          >
            {loading ? "Processing..." : "Confirm"}
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  );
}
