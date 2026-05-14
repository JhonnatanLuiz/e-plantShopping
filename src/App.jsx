import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { useSelector } from 'react-redux';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  
  // pega os itens do Redux para calcular o total
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        {/* passa o total para o header */}
        <ProductList onHomeClick={handleHomeClick} totalItems={totalItems} />
      </div>
    </div>
  );
}

export default App;