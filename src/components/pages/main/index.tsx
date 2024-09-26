import {ReactElement} from 'react';
import {styled} from '@mui/material';
import ProductList from './product-list';
import PageContainer from '../../custom-ui/page-container';

const BannerImage = styled('img')({
  width: '100%',
});

const MainPage = (): ReactElement => {
  return (
    <PageContainer
      title="Товары"
      topContent={<BannerImage src={require('../../../assets/img/banner.png')} alt="banner"/>}
    >
      <ProductList />
    </PageContainer>
  );
};

export default MainPage;