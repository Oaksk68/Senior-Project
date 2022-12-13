import React from 'react'
import Filter from '../../components/filters/Filter'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import '../shop/shop.css'

const Shop = () => {
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
  return (
    <div className="wrapper">
      {/* Header Start */}
      <header className='header-container'>
        <Header />
      </header>
      {/* Header End */}

      {/* Main Start */}
      <main className='main-container'>
        <Filter url={`/api/products/like/${userInfo._id}`} />
      </main>
      {/* Main End*/}

      {/* Footer Start */}
      <footer className='footer-container'>
        <Footer />
      </footer>
      {/* Footer End*/}
    </div>
  )
}

export default Shop
