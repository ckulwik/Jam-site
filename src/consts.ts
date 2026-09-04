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

type Product = {
    img: string,
    title: string,
    description: string
    price: number
}

const products: Product[] = [
    {
        img: "https://www.placekittens.com/g/250/250",
        title: "Triple Berry French Toast Jam",
        description: "insert description here",
        price: 12
    },
    {
        img: "https://www.placekittens.com/g/250/250",
        title: "Strawberry Margarita Jam",
        description: "insert description here",
        price: 10
    },
    {
        img: "https://www.placekittens.com/g/250/250",
        title: "Blueberry Lavender Lemonade Jam",
        description: "insert description here",
        price: 10
    }
]

export { products }
export type { Product }