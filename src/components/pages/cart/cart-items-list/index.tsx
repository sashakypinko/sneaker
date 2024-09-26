import {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCart} from '../../../../store/selectors';
import {Box, CircularProgress, styled} from '@mui/material';
import CartItem from './cart-item';
import {removeCartItem} from '../../../../store/cart/slice';
import useSnackbar from '../../../custom-ui/snackbar/hooks/use-snackbar.hook';

const List = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 64,
});

const CartItemsList = (): ReactElement => {
  const {cartItems, loading} = useSelector(selectCart);
  const {showSnackbar} = useSnackbar();
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeCartItem({
      id,
      onSuccess: () => {
        showSnackbar('Item removed from the cart', 'success');
      },
      onError: () => {
        showSnackbar('Can\'t remove!', 'error');
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
    <List>
      {cartItems.map((item) => <CartItem key={item.id} item={item} onRemove={() => handleRemove(item.id)}/>)}
    </List>
  );
};

export default CartItemsList;