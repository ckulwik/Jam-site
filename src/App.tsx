import MainImage from './components/mainImage'
import Footer from './components/footer'
import Header from './components/header'
import { Pages } from './consts'
import { useState } from 'react'
import ShopPage from './pages/shop'
import WhereWeSellPage from './pages/whereWeSell'
import WhatsNewPage from './pages/whatsNew'
import AboutPage from './pages/about'
import ContactUsPage from './pages/contactUs'
import RecipesPage from './pages/recipes'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.SHOP);

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <div className="main-image-container">
        <MainImage />
      </div>

      {currentPage === Pages.SHOP && (
        <ShopPage />
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
