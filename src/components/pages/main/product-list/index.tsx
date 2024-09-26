import {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectProducts} from '../../../../store/selectors';
import {getProducts} from '../../../../store/products/slice';
import {Box, CircularProgress, Grid} from '@mui/material';
import ProductItem from './product-item';
import {addCartItem} from '../../../../store/cart/slice';
import {RouteEnum} from '../../../../routes/enums/route.enum';
import {useNavigate} from 'react-router-dom';
import useSnackbar from '../../../custom-ui/snackbar/hooks/use-snackbar.hook';
import {IProduct} from '../../../../services/api/product/dto/product.dto';

const ProductList = (): ReactElement => {
  const {products, loading} = useSelector(selectProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {showSnackbar} = useSnackbar();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  const handleAddToCart = (product: IProduct) => {
    const {id, ...cartItem} = product;

    dispatch(addCartItem({
      cartItem: {
        ...cartItem,
        productId: id,
      },
      onSuccess: () => {
        navigate(RouteEnum.CART);
        showSnackbar('A new product added to the cart', 'success');
      },
      onError: () => {
        showSnackbar('Can\'t add product to cart!', 'error');
      },
    }));
  };
  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" width="100%">
        <CircularProgress size={40}/>
      </Box>
    );
  }

  return (
    <Grid sx={{ mb: 10 }} container spacing={12}>
      {
        products.map((product) => (
          <Grid key={product.id} item xs={12} md={4}>
            <ProductItem product={product} onAddToCart={() => handleAddToCart(product)}/>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default ProductList;