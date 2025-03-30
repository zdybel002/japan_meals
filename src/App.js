import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import "./App.css";
import CartContextProvider from "./store/CartContextProvider";

function App() {
    const [binIsVisible, setBinIsVisible] = useState(false);

    const showCartHandler = () => {
        setBinIsVisible(true);
    };

    const hideCartHandler = () => {
        setBinIsVisible(false);
    };

    return (
        <CartContextProvider>
            {binIsVisible && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <Meals />
        </CartContextProvider>
    );
}

export default App;
