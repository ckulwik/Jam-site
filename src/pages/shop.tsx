import ProductCard from "../components/productCard";
import { products } from "../consts";
import type { Product } from "../types";
import './shop.css'
import './page.css'

const ShopPage = ({ addToCart }: { addToCart: (product: Product) => void }) => {
    return (
        <div>
            <h2 className="title">Shop</h2>
            <div className="product-cards">
                {products.map((product) => (
                    <ProductCard key={product.title} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default ShopPage;