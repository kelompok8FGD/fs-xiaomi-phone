import { createSlice } from '@reduxjs/toolkit';

const getUser = () => JSON.parse(localStorage.getItem('user'));

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const user = getUser();
      if (user) {
        const itemInCart = state.cart.find((item) => item.id === action.payload.id && item.userId === user.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.cart.push({ ...action.payload, quantity: 1, userId: user.id });
        }
      }
    },
    incrementQuantity: (state, action) => {
      const user = getUser();
      if (user) {
        const item = state.cart.find((item) => item.id === action.payload && item.userId === user.id);
        if (item) {
          item.quantity++;
        }
      }
    },
    decrementQuantity: (state, action) => {
      const user = getUser();
      if (user) {
        const item = state.cart.find((item) => item.id === action.payload && item.userId === user.id);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const user = getUser();
      if (user) {
        const removeItem = state.cart.filter((item) => item.id !== action.payload || item.userId !== user.id);
        state.cart = removeItem;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart
} = cartSlice.actions;
