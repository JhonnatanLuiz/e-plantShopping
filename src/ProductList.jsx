import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    // O array já vem no projeto – mantive os 3 grupos com 6 plantas
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
                    image: "https://cdn.pixabay.com/photo/2020/02/15/09/49/citronella-4850305_1280.jpg",
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

    return (
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
    );
};

export default ProductList;