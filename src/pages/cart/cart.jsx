import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Koszyk
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Twój koszyk jest pusty.</Typography>
        ) : (
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.name} />
                </ListItemAvatar>
                <ListItemText 
                  primary={item.name} 
                  secondary={`Ilość: ${item.quantity}, Cena: ${item.price} zł`} 
                />
              </ListItem>
            ))}
          </List>
        )}
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Przejdź do kasy
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cart;
