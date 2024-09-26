import {type RootState} from './store';
import {ProductsState} from './products/types';
import {CartState} from './cart/types';

export const selectProducts = (state: RootState): ProductsState => state.products;

export const selectCart = (state: RootState): CartState => state.cart;
