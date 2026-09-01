import { ShoppingCart } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { Pages } from "../consts"

import './header.css'

const header = ({ setCurrentPage }: { setCurrentPage: (page: Pages) => void }) => {
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
                    <IconButton aria-label="shopping-cart" size="large">
                        <ShoppingCart fontSize="large" />
                    </IconButton>
                </div>
            </header>
        </div>
    )
}

export default header
