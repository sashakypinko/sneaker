import ApiService from '../api-service';
import {ICartItem} from './dto/cart-item.dto';
import {AddCartItemRequest} from './dto/add-cart-item-request.dto';

class CartApiService extends ApiService {
  getAll = async (): Promise<ICartItem[]> => await this.get('').then((res) => res.data);
  
  create = async (data: AddCartItemRequest): Promise<ICartItem> => await this.post('', data).then((res) => res.data);

  remove = async (id: number): Promise<ICartItem> => await this.delete(`/${id}`).then((res) => res.data);
}

export const CartApi = new CartApiService('cart');
