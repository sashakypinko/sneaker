import {IProduct} from '../../services/api/product/dto/product.dto';

export type ProductsState = {
  products: IProduct[];
  loading: boolean;
  error: any;
};
