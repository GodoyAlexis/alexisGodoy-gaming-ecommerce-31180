import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addProductToCart = (product) => {
    const inCart = cartListItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartListItems(
        cartListItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const removeProductToCart = (product) => {
    const inCart = cartListItems.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartListItems(
        cartListItems.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartListItems(
        cartListItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  const clearProductToCart = (product) => {
    setCartListItems(
      cartListItems.filter((productInCart) => productInCart.id !== product.id)
    );
  };

  const clearCart = () => setCartListItems([]);

  const data = {
    cartListItems,
    addProductToCart,
    removeProductToCart,
    clearProductToCart,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
