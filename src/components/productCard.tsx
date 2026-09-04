import { Button, Card, CardContent, CardMedia, CardActions, Typography } from "@mui/material"
import type { Product } from "../consts";
import useShoppingCart from "../composibles/useShoppingCard";
import ProductInfoModal from "../pages/productInfoModal";
import { useState } from "react";
import Check from '@mui/icons-material/Check';


const productCard = ({ product }: { product: Product }) => {
    const { addToCart } = useShoppingCart();
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={product.img}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setOpen(true)}>Learn More</Button>
                    <Button size="small" variant="contained" loading={loading} startIcon={success ? <Check /> : undefined} onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            addToCart(product);
                            setLoading(false);
                            setSuccess(true);
                            setTimeout(() => setSuccess(false), 2000);
                        }, 1000);
                    }}>
                        {success ? "Added" : "Add To Cart"}
                    </Button>
                </CardActions>
            </Card>
            <ProductInfoModal product={product} open={open} setOpen={setOpen} />
        </>
    )
}

export default productCard;