import type { CartItem } from "../types";
import { Drawer, Box, Divider, Button } from "@mui/material"
import "./cartDrawer.css"

const CartDrawer = ({ open, onClose, cart }: { open: boolean, onClose: () => void, cart: CartItem[] }) => {

    return (
        <Drawer open={open} onClose={onClose} anchor="right">
            <Box className="cart-drawer" sx={{ width: 400 }} role="presentation" onClick={onClose}>
                <h2 className="title">Your Cart</h2>
                {cart.length ? cart.map((item, index) => (
                    <div className="cart-item" key={item.product.name}>
                        <p>{item.product.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        {index < cart.length - 1 && <Divider />}
                    </div>

                )
                ) : (
                    <p className="empty-cart-message">Your cart is empty. A great starting point!</p>
                )}
                {cart.length > 0 && (
                    <Button className="checkout-button" variant="contained" color="primary">
                        Checkout
                    </Button>
                )}
            </Box>
        </Drawer>
    )
}

export default CartDrawer;