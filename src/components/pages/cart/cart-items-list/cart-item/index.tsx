import React, {ReactElement} from 'react';
import {ICartItem} from '../../../../../services/api/cart/dto/cart-item.dto';
import {Box, styled, Typography} from '@mui/material';
import IconButton from '../../../../custom-ui/icon-button';
import {DeleteOutline} from '@mui/icons-material';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../../../store/selectors';

const Image = styled('img')({
  maxWidth: 240,
  borderRight: '1px solid #878787FF',
  paddingRight: 36,
});

const ItemCard = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 18,
  borderRadius: 10,
  background: '#FAFAFA',
});

interface Props {
  item: ICartItem;
  onRemove: () => void;
}

const CartItem = ({item, onRemove}: Props): ReactElement => {
  const {removableId} = useSelector(selectCart);

  return (
    <ItemCard>
      <Box display="flex" alignItems="center" gap={4}>
        <Image src={item.image} alt={item.name}/>
        <Typography maxWidth={360} variant="h5">{item.name}</Typography>
        <Box>
          <Typography variant="subtitle2">ЦЕНА:</Typography>
          <Typography variant="h5" fontWeight={700}>{item.price} €</Typography>
        </Box>
      </Box>
      <IconButton onClick={onRemove} loading={removableId === item.id}>
        <DeleteOutline/>
      </IconButton>
    </ItemCard>
  );
};

export default CartItem;