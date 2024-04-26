import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price, selectSize, color } = action.payload;

      const findProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize && product.color === color
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({
          id,
          title,
          image,
          price,
          selectSize,
          color,
          quantity: 1,
        });
      }
    },
    deleteFromCart: (state, action) => {
      const { id, selectSize  ,color} = action.payload;

      const updateCart = state.filter(
        (product) => !(product.id === id && product.selectSize === selectSize && product.color === color)
      );
      return updateCart;
    },

    increaseQuantity: (state, action) => {
      const { id, selectSize, color } = action.payload;

      const increaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize &&  product.color === color
      );

      if (increaseProduct) {
        increaseProduct.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const { id, selectSize, color  } = action.payload;

      const decreaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize && product.color === color
      );

      if (decreaseProduct && decreaseProduct.quantity > 1) {
        decreaseProduct.quantity -= 1;
      }
    },

    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
