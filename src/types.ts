type Product = {
    img: string,
    name: string,
    description: string
    price: number,
    emoji1: string,
    emoji2: string
}

type CartItem = {
    product: Product,
    quantity: number
}
export type { Product, CartItem }