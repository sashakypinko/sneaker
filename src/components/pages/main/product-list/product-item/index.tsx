import React, {ReactElement} from 'react';
import {Box, styled, Typography, useTheme} from '@mui/material';
import {IProduct} from '../../../../../services/api/product/dto/product.dto';
import {Add} from '@mui/icons-material';
import IconButton from '../../../../custom-ui/icon-button';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../../../store/selectors';

const ProductCard = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 40,
  borderRadius: 42,
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  gap: 32,
}));

const ProductCardFooter = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

interface Props {
  product: IProduct;
  onAddToCart: () => void;
}

const ProductItem = ({product, onAddToCart}: Props): ReactElement => {
  const {addableId} = useSelector(selectCart);
  const theme = useTheme();

  return (
    <ProductCard>
      <img src={product.image} alt={product.name}/>
      <Typography variant="h5">{product.name}</Typography>
      <ProductCardFooter>
        <Box>
          <Typography variant="subtitle2" color={theme.palette.text.disabled}>Цена:</Typography>
          <Typography variant="h5" fontWeight={700}>{product.price} €</Typography>
        </Box>
        <IconButton onClick={onAddToCart} loading={product.id === addableId}>
          <Add />
        </IconButton>
      </ProductCardFooter>
    </ProductCard>
  );
};

export default ProductItem;