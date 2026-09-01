import ProductCard from "../components/productCard";

import './shop.css'

const shopPage = () => {
    return (
        <div>
            <h2>Shop</h2>
            <div className="product-cards">
                <ProductCard img="https://www.placekittens.com/g/250/250" title="Triple Berry French Toast Jam" description="insert description here" />
                <ProductCard img="https://www.placekittens.com/g/250/250" title="Strawberry Margarita Jam" description="insert description here" />
                <ProductCard img="https://www.placekittens.com/g/250/250" title="Blueberry Lavender Lemonade Jam" description="insert description here" />
            </div>
        </div>
    )
}

export default shopPage;