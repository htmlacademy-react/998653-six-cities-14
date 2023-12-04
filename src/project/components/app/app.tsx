import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import {browserHistory} from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { ProtectedRoute } from '../protected-route/protected-route';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/404-page/404-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritePage } from '../../pages/favorites-page/favorites-page';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { fetchOffers } from '../../store/api-actions';


function App() {
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector((state) => state.offersFetchingStatus);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if(!isOffersLoading || authorizationStatus === AuthorizationStatus.NoAuth) {
    <SpinnerComponent />;
  }

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.NoAuth}
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
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectTo={AppRoute.Login}
              >
                <FavoritePage/>
              </ProtectedRoute >
            }
          />

          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <OfferPage/>
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
