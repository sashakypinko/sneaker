import {ReactElement, useEffect, useState} from 'react';
import {Box, styled, Typography} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import {RouteEnum} from '../../../routes/enums/route.enum';
import {getActiveRoute} from '../../../helpers/url-helper';

const HeaderBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: 40,
  background: '#3B3C3D',
  color: theme.palette.text.secondary,
}));

interface NavLinkProps {
  active: 1 | 0;
}

const NavLink = styled(Link)<NavLinkProps>(({theme, active}) => ({
  fontSize: 15,
  fontWeight: 600,
  textDecoration: 'none',
  color: theme.palette.text[active ? 'secondary' : 'disabled'],
}));

const Header = (): ReactElement => {
  const [page, setPage] = useState<RouteEnum>(RouteEnum.MAIN);
  const location = useLocation();

  useEffect(() => {
    setPage(getActiveRoute());
  }, [location]);

  return (
    <HeaderBox>
      <Typography variant="h6" fontWeight={900}>Сникер - магазин</Typography>
      <Box display="flex" alignItems="center" gap={8}>
        <NavLink to={RouteEnum.MAIN} active={page === RouteEnum.MAIN ? 1 : 0}>Главная</NavLink>
        <NavLink to={RouteEnum.CART} active={page === RouteEnum.CART? 1 : 0}>Корзина</NavLink>
        <NavLink to={RouteEnum.CONTACTS} active={page === RouteEnum.CONTACTS? 1 : 0}>Контакты</NavLink>
      </Box>
    </HeaderBox>
  );
};

export default Header;