import './App.css'
import MainImage from './components/mainImage'
import Footer from './components/footer'
import Header from './components/header'

const App = () => {

  return (
    <>
      <Header/>

      <div className="main-image-container">
        <MainImage />
      </div>

      <Footer/>
    </>
  )
}

export default App
