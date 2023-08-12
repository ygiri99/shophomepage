import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productpage from './Components/Productpage.';
import Titleshop from './Components/Titleshop';
import { Cart } from './Components/Cart';
import { UserContext } from './Context/Context';
import { Rating } from './Components/Rating';
import { Routes, Route } from 'react-router-dom';


function App() {
    //Data to be dispalyed
    const cardsDetail = [
        {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Fancy Products",
            rating: "",
            price: "$40-$80",
            id: 1,
            disabled: false
        },
        {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Special Item",
            rating: <Rating />,
            strikedprice: "$20.00",
            price: " $18.00",
            id: 2,
            disabled: false
        },
        {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Sale Item",
            rating: "",
            strikedprice: "$50.00",
            price: " $25.00",
            id: 3,
            disabled: false
        },
        {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Popular Item",
            rating: <Rating />,
            price: "$40.00",
            id: 4,
            disabled: false
        }, {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Sale Item",
            rating: "",
            strikedprice: "$50.00",
            price: " $25.00",
            id: 5,
            disabled: false
        }, {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Fancy Product",
            rating: "",
            price: "$125.00-$280.00",
            id: 6,
            disabled: false
        }, {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Special Item",
            rating: <Rating />,
            strikedprice: "$20.00",
            price: " $18.00",
            id: 7,
            disabled: false
        }, {
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Popular Item",
            rating: <Rating />,
            price: "$40.00",
            id: 8,
            disabled: false
        }

    ];

    //state for cartQuantity,cartItem, carddetails
    const [state, setState] = useState({
        cartQuantity: 0,
        cardsDetail: cardsDetail,
        cart: [],
    });

    //function for add to cart
    const addToCart = (card) => {
        card.disabled = true;
        setState({ ...state, cartQuantity: state.cartQuantity + 1, cart: [...state.cart, card] });
    }

    //function for delete from cart
    const remove = (cartCard) => {
        cartCard.disabled = false;
        setState({ ...state, cartQuantity: state.cartQuantity - 1, cart: state.cart.filter((card) => card.id !== cartCard.id) })
    }

    return (
        <div className="App">
            <UserContext.Provider value={{ state: state, addToCart, remove }}>
                < Header />
                < Titleshop />
                < Routes>
                    <Route path="/" element={<Productpage />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                < Footer />
            </UserContext.Provider>
        </div>
    );
}

export default App;
