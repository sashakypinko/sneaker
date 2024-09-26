import ApiService from '../api-service';
import {type IProduct} from './dto/product.dto';

class ProductApiService extends ApiService {
  getAll = async (): Promise<IProduct[]> => await this.get('').then((res) => res.data);
}

export const ProductApi = new ProductApiService('products');
