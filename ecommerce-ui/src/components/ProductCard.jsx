import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../providers/CartProvider";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { _id, image, name, description, price } = product;
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={`http://localhost:3000/${image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} {price} $
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
        <Button size="small">Wish List</Button>
      </CardActions>
    </Card>
  );
}
