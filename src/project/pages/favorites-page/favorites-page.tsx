import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { FavoriteCard } from '../../components/favorite-card/favorite-card';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch} from '../../hooks';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions';


function FavoritePage(){
  //почему пустой массив?
  const favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

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
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="#">
                      <span></span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favorites.map((offer) => (
                    <FavoriteCard offer={offer} key={offer.id}/>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export { FavoritePage };
