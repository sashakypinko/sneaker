import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICartItem} from '../../services/api/cart/dto/cart-item.dto';
import {
  AddCartItemPayload,
  CartState, RemoveCartItemPayload,
} from './types';

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  addableId: null,
  removableId: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems: (state: CartState) => {
      state.loading = true;
      state.error = null;
    },
    getCartItemsSuccess: (state: CartState, {payload: cartItems}: PayloadAction<ICartItem[]>) => {
      state.loading = false;
      state.cartItems = cartItems;
      state.totalAmount = cartItems.reduce((acc, {price}) => price + acc, 0);
    },
    getCartItemsError: (state: CartState, {payload: error}: PayloadAction<any>) => {
      state.loading = false;
      state.error = error;
    },
    addCartItem: (state: CartState, action: PayloadAction<AddCartItemPayload>) => {
      state.addableId = action.payload.cartItem.productId;
      state.error = null;
    },
    addCartItemSuccess: (state: CartState) => {
      state.addableId = null;
    },
    addCartItemError: (state: CartState, {payload: error}: PayloadAction<any>) => {
      state.addableId = null;
      state.error = error;
    },
    removeCartItem: (state: CartState, action: PayloadAction<RemoveCartItemPayload>) => {
      state.removableId = action.payload.id;
      state.error = null;
    },
    removeCartItemSuccess: (state: CartState) => {
      state.removableId = null;
    },
    removeCartItemError: (state: CartState, {payload: error}: PayloadAction<any>) => {
      state.removableId = null;
      state.error = error;
    },
  },
});

export const {
  getCartItems,
  getCartItemsSuccess,
  getCartItemsError,
  addCartItem,
  addCartItemSuccess,
  addCartItemError,
  removeCartItem,
  removeCartItemSuccess,
  removeCartItemError,
} = productsSlice.actions;

export default productsSlice.reducer;
