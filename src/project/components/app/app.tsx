import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../const/const';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/404-page/404-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritePage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { RentQuantity } from '../../const/const';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage props={RentQuantity.quantity} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritePage />} />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
