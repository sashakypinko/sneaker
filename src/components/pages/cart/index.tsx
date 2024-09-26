import {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCart} from '../../../store/selectors';
import {getCartItems} from '../../../store/cart/slice';
import PageContainer from '../../custom-ui/page-container';
import {Grid} from '@mui/material';
import CartItemsList from './cart-items-list';
import CartItemsSummary from './cart-items-summary';

const CartPage = (): ReactElement => {
  const {cartItems} = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartItems.length) {
      dispatch(getCartItems());
    }
  }, []);
  
  return (
    <PageContainer
      title="Корзина"
    >
      <Grid container spacing={10}>
        <Grid item xs={12} md={8}>
          <CartItemsList />
        </Grid>
        <Grid item xs={12} md={4}>
          <CartItemsSummary />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CartPage;