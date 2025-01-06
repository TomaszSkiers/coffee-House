import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/product-card';

import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { fetchProducts } from '../../api/products';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const [products, setProducts] = useState([]);
  const id = useParams()
  console.log(id.id)

  useEffect(()=>{
    const fetchData = async (obj) => {
      const data = await fetchProducts(obj)
      // console.log(data)
      setProducts(data)
    }

    fetchData({categoryId: +id.id})
  },[id])

  return (
    <>
      {!products.length ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">{products.at(0).category.name}</Typography>
          <Grid container spacing={2} marginTop={1}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
