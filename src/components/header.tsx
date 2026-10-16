import { ShoppingCart } from "@mui/icons-material"
import { Button, IconButton, Badge, badgeClasses, styled } from "@mui/material"
import { Pages } from "../consts"

import './header.css'
import { useState } from "react"
import CartDrawer from "./cartDrawer"
import type { CartItem } from "../types"

const Header = ({ setCurrentPage, numItemsInCart, cart }: { setCurrentPage: (page: Pages) => void, numItemsInCart: number, cart: CartItem[] }) => {

    const [openCartDrawer, setOpenCartDrawer] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenCartDrawer(newOpen);
    };

    const CartBadge = styled(Badge)`
        & .${badgeClasses.badge} {
            top: -12px;
            right: -6px;
        }
    `;
    return (
        <div className="fixed-to-top">
            <header className="header-container">
                <div className="small-logo">
                    <h1>Bug & Bee Jamm Co.</h1>
                </div>

                <div className="buttons">
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.SHOP)}>
                        Shop
                    </Button>
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.WHERE_WE_SELL)}>
                        Where we sell
                    </Button>
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.WHATS_NEW)}>
                        What's new?
                    </Button>
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.ABOUT)}>
                        About
                    </Button>
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.CONTACT_US)}>
                        Contact Us
                    </Button>
                    <Button variant="text" size="large" onClick={() => setCurrentPage(Pages.RECIPES)}>
                        Recipes
                    </Button>
                </div>

                <div className="cart">
                    <IconButton aria-label="shopping-cart" size="large" onClick={toggleDrawer(true)}>
                        <ShoppingCart fontSize="large" />
                        <CartBadge badgeContent={numItemsInCart} color="primary" overlap="circular" />
                    </IconButton>
                </div>
                <CartDrawer open={openCartDrawer} onClose={toggleDrawer(false)} cart={cart} />
            </header>
        </div>
    )
}

export default Header
