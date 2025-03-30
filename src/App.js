import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";

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
