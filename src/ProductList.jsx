import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

const ProductList = ({ onHomeClick, totalItems }) => {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/lavender-4269287_1280.jpg",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2017/08/06/14/02/jasmine-2591533_1280.jpg",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Citronella",
                    image: "https://images.unsplash.com/photo-1599598177991-ec67b5c37318",
                    description: "Natural mosquito repellent.",
                    cost: "$14"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/28/19/31/basil-1548290_1280.jpg",
                    description: "Repels flies and mosquitoes.",
                    cost: "$10"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
    };

    const handleCartClick = () => setShowCart(true);
    const handleContinueShopping = () => setShowCart(false);

    return (
        <div>
            {/* HEADER – aparece nas duas páginas */}
            <div className="navbar">
                <div className="navbar-brand" onClick={onHomeClick}>Paradise Nursery</div>
                <div className="navbar-links">
                    <span onClick={onHomeClick}>Home</span>
                    <span onClick={() => setShowCart(false)}>Plants</span>
                    <div className="cart-icon" onClick={handleCartClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.16 14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 0 0 0-.88-1.48H5.21L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7.42c-.14 0-.25-.11-.25-.25l.01-.03z"/>
                        </svg>
                        <span className="cart-count">{totalItems}</span>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-list">
                    {plantsArray.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="plant-category">{category.category}</h2>
                            <div className="product-grid">
                                {category.plants.map((plant, i) => (
                                    <div className="product-card" key={i}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p className="product-price">{plant.cost}</p>
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
};

export default ProductList;