import { ShoppingCart } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import './header.css'

const header = () => {
    return (
        <header className="header-container">
            <h1>Bug & Bee Jam Co.</h1>
            <div className="cart"> 
                <IconButton aria-label="shopping-cart" size="large">
                    <ShoppingCart fontSize="large"/>
                </IconButton>
            </div>
        </header>
    )
}

export default header
