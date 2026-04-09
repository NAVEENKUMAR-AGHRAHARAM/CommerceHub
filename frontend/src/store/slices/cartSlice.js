import { createSlice } from '@reduxjs/toolkit';

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const calcPrices = (items) => {
  const itemsPrice = addDecimals(
    items.reduce((acc, item) => acc + (item?.price || 0) * (item?.qty || 0), 0)
  );
  const shippingPrice = addDecimals(Number(itemsPrice) > 100 ? 0 : 10);
  const taxPrice = addDecimals(Number((0.15 * Number(itemsPrice)).toFixed(2)));
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

const updateCart = (state) => {
  const filteredItems = state.cartItems.filter(item => item !== null);
  state.cartItems = filteredItems;
  
  if (!state.buyNowItem) {
    const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calcPrices(filteredItems);
    state.itemsPrice = itemsPrice;
    state.shippingPrice = shippingPrice;
    state.taxPrice = taxPrice;
    state.totalPrice = totalPrice;
  }

  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};

const getInitialState = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    const parsed = JSON.parse(cart);
    if (parsed.cartItems) {
      parsed.cartItems = parsed.cartItems.filter(item => item !== null);
    }
    return {
      ...parsed,
      buyNowItem: null // Reset Buy Now state on reload
    };
  }
  return {
    cartItems: [],
    shippingAddress: { address: '', city: '', postalCode: '', country: '' },
    paymentMethod: 'Card',
    buyNowItem: null
  };
};

const initialState = getInitialState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.buyNowItem = null; // Clear buy now if adding to cart
      return updateCart(state);
    },
    setBuyNowItem: (state, action) => {
      state.buyNowItem = action.payload;
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calcPrices([action.payload]);
      state.itemsPrice = itemsPrice;
      state.shippingPrice = shippingPrice;
      state.taxPrice = taxPrice;
      state.totalPrice = totalPrice;
      // Note: We don't save buyNowItem to localStorage to keep it transient
      return state;
    },
    clearBuyNow: (state) => {
      state.buyNowItem = null;
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      state.buyNowItem = null;
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  setBuyNowItem,
  clearBuyNow,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
