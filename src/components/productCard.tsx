import { Button, Card, CardContent, CardMedia, CardActions, Typography } from "@mui/material"

const productCard = ({ img, title, description }: { img: string; title: string; description: string }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" variant="contained">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default productCard;