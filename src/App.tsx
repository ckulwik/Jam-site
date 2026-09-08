import MainImage from './components/mainImage'
import Footer from './components/footer'
import Header from './components/header'
import { Pages } from './consts'
import { useState } from 'react'
import type { CartItem, Product } from './types'
import ShopPage from './pages/shop'
import WhereWeSellPage from './pages/whereWeSell'
import WhatsNewPage from './pages/whatsNew'
import AboutPage from './pages/about'
import ContactUsPage from './pages/contactUs'
import RecipesPage from './pages/recipes'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.SHOP);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    if (cart.some((item) => item.product === product)) {
      setCart(prevCart =>
        prevCart.map((item) =>
          item.product === product ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { product, quantity: 1 }]);
    }
  };



  return (
    <>
      <Header setCurrentPage={setCurrentPage} cart={cart} numItemsInCart={cart.reduce((total, item) => total + item.quantity, 0)} />

      <div className="main-image-container">
        <MainImage />
      </div>

      {currentPage === Pages.SHOP && (
        <ShopPage addToCart={addToCart} />
      )}
      {currentPage === Pages.WHERE_WE_SELL && (
        <WhereWeSellPage />
      )}
      {currentPage === Pages.WHATS_NEW && (
        <WhatsNewPage />
      )}
      {currentPage === Pages.ABOUT && (
        <AboutPage />
      )}
      {currentPage === Pages.CONTACT_US && (
        <ContactUsPage />
      )}
      {currentPage === Pages.RECIPES && (
        <RecipesPage />
      )}


      <Footer />
    </>
  )
}

export default App
