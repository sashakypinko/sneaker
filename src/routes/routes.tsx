import React, {lazy, type ReactElement, Suspense} from 'react';
import {Route, Routes as CommonRoutes} from 'react-router-dom';
import {CircularProgress} from '@mui/material';
import {type RouteInterface} from './interfaces/route.interface';
import {RouteEnum} from './enums/route.enum';

const MainPage = lazy(() => import('../components/pages/main'));
const CartPage = lazy(() => import('../components/pages/cart'));
const ContactsPage = lazy(() => import('../components/pages/contacts'));
const NotFoundPage = lazy(() => import('../components/pages/not-found'));

const routes: RouteInterface[] = [
  {
    path: RouteEnum.MAIN,
    Component: MainPage,
  },
  {
    path: RouteEnum.CART,
    Component: CartPage,
  },
  {
    path: RouteEnum.CONTACTS,
    Component: ContactsPage,
  },
];

const Routes = (): ReactElement => {
  return (
    <Suspense fallback={<CircularProgress/>}>
      <CommonRoutes>
        {routes.map((route: RouteInterface, key) => (
          <Route key={key} path={route.path} Component={route.Component}/>
        ))}
        <Route path={RouteEnum.NOT_FOUND} Component={NotFoundPage}/>
      </CommonRoutes>
    </Suspense>
  );
};

export default Routes;
