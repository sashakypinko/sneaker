import productsReducer from './products/slice';
import cartReducer from './cart/slice';

const rootReducers = {
  products: productsReducer,
  cart: cartReducer,
};

export default rootReducers;
