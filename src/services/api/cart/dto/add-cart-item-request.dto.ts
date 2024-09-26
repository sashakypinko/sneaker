import {ICartItem} from './cart-item.dto';

export interface AddCartItemRequest extends Omit<ICartItem, 'id'> {
  productId: number
}
