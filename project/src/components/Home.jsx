import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {}, []);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
        <Grid container spacing={2} padding={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography variant="body2">${product.price}</Typography>
                            <Typography variant="caption" color="textSecondary">{product.category}</Typography>
                            <Typography variant="caption" color="textSecondary">{product.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </div>
    );
};

export default Home;
