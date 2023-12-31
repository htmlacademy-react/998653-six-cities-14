import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { useAppSelector, useAppDispatch} from '../../hooks/index';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { AuthorizationStatus, RequestStatus } from '../../const/const';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { FavoritesEmptyPage } from './favorites-empty';


function FavoritePage(){
  const favorites = useAppSelector((state) => state.favorites);
  const favoritesStatus = useAppSelector((state) => state.favoritesFetchingStatus);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [authorizationStatus, dispatch]);

  if (favoritesStatus === RequestStatus.Pending) {
    return <SpinnerComponent />;
  }

  if (favorites.length === 0) {
    return <FavoritesEmptyPage />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={favorites} />
          </section>
        </div>
      </main>
    </div>
  );
}

export { FavoritePage };
