import ProductCard from "../components/productCard";
import { products } from "../consts";
import './shop.css'
import './page.css'

const shopPage = () => {
    return (
        <div>
            <h2 className="title">Shop</h2>
            <div className="product-cards">
                {products.map((product) => (
                    <ProductCard key={product.title} product={product} />
                ))}
            </div>
        </div>
    )
}

export default shopPage;