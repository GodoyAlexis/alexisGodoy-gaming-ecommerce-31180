import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPriceAux = 0;
    cartListItems.forEach((product) => {
      totalPriceAux = totalPriceAux + product.price * product.amount;
    });
    setTotalPrice(totalPriceAux);
  }, [cartListItems]);

  useEffect(() => {
    setQuantityCart(cartListItems.length);
  }, [cartListItems]);

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
    quantityCart,
    totalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
