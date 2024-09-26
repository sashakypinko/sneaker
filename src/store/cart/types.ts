import {ICartItem} from '../../services/api/cart/dto/cart-item.dto';
import {PayloadMeta} from '../store';
import {AddCartItemRequest} from '../../services/api/cart/dto/add-cart-item-request.dto';

export type CartState = {
  cartItems: ICartItem[];
  totalAmount: number;
  loading: boolean;
  addableId: number | null;
  removableId: number | null;
  error: any;
};

export interface AddCartItemPayload extends PayloadMeta {
  cartItem: AddCartItemRequest;
}

export interface RemoveCartItemPayload extends PayloadMeta {
  id: number;
}
