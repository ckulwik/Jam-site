import { Button, Card, CardContent, CardMedia, CardActions, Typography } from "@mui/material"
import type { Product } from "../types";
import ProductInfoModal from "./productInfoModal";
import { useState } from "react";
import Check from '@mui/icons-material/Check';


const ProductCard = ({ product, addToCart }: { product: Product, addToCart: (product: Product) => void }) => {
    const [open, setOpen] = useState(false);

    const [success, setSuccess] = useState(false);

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={product.img}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setOpen(true)}>Learn More</Button>
                    <Button size="small" variant="contained" startIcon={success ? <Check /> : undefined} onClick={() => {
                        addToCart(product);
                        setSuccess(true);
                        setTimeout(() => setSuccess(false), 2000);
                    }}>
                        {success ? `${product.emoji1} Added ${product.emoji2}` : "Add To Cart"}
                    </Button>
                </CardActions>
            </Card>
            <ProductInfoModal product={product} open={open} setOpen={setOpen} />
        </>
    )
}

export default ProductCard;