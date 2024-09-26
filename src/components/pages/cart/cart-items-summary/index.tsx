import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../../store/selectors';
import {Box, Divider, styled, Typography, useTheme} from '@mui/material';

const SummaryCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: 28,
  gap: 40,
  background: '#FAFAFA',
});


const CartItemsSummary = (): ReactElement => {
  const {cartItems, totalAmount} = useSelector(selectCart);
  const theme = useTheme();

  return (
    <SummaryCard>
      <Typography variant="h4" align="center">Итого</Typography>
      {
        cartItems.map(({id, name}) => (
          <Typography variant="h5" key={id} color={theme.palette.text.disabled}>{name}</Typography>
        ))
      }
      <Divider/>
      <Box>
        <Typography variant="subtitle2" fontWeight={700}>ЦЕНА:</Typography>
        <Typography variant="h5" fontWeight={700}>{totalAmount} €</Typography>
      </Box>
    </SummaryCard>
  );
};

export default CartItemsSummary;