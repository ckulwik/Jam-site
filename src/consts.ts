import type { Product } from './types'

export enum SocialSites {
    INSTAGRAM = "Instagram",
    FACEBOOK = "Facebook",
}

export enum Pages {
    SHOP = "Shop",
    WHERE_WE_SELL = "Where we sell",
    WHATS_NEW = "What's new?",
    ABOUT = "About",
    CONTACT_US = "Contact Us",
    RECIPES = "Recipes"
}



const products: Product[] = [
    {
        img: "https://www.placekittens.com/g/250/250",
        name: "Triple Berry French Toast Jam",
        description: "insert description here",
        price: 12,
        emoji1: '🍓',
        emoji2: '🍁'
    },
    {
        img: "https://www.placekittens.com/g/250/250",
        name: "Strawberry Margarita Jam",
        description: "insert description here",
        price: 10,
        emoji1: '🍓',
        emoji2: '🍋‍🟩'
    },
    {
        img: "https://www.placekittens.com/g/250/250",
        name: "Blueberry Lavender Lemonade Jam",
        description: "insert description here",
        price: 10,
        emoji1: '🫐',
        emoji2: '🪻'
    }
]

export { products }
