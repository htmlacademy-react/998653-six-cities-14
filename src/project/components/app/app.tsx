import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const/const';
import { ProtectedRoute } from '../protected-route/protected-route';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/404-page/404-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritePage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { mockedOffer} from '../../mocks/offers';
import { OffersProps } from '../../types/Offers.type';

type AppProps = {
  offers: OffersProps;
}

function App({offers}: AppProps) {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                offers={offers}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth} // потом поненять на No
                redirectTo={AppRoute.Main}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Login}
              >
                <FavoritePage
                  offers={offers}
                />
              </ProtectedRoute >
            }
          />

          <Route
            path={`${AppRoute.Offer}/:offerId`} //косяк
            element={
              <OfferPage
                offer = {mockedOffer} // заменить потом на все оfeры
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
