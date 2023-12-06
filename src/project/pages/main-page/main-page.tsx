import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header } from '../../components/header/header';
import { LocationList } from '../../components/location-list/location-list';
import { Cities } from '../../components/cities/cities';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { NotFoundPage } from '../404-page/404-page';

import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { fetchOffers } from '../../store/api-actions';
import { CityMap, RequestStatus } from '../../const/const';
import { useLocation } from 'react-router-dom';
import { setActiveCity } from '../../store/actions';
import { MainEmpty } from './main-empty';
import classNames from 'classnames';

function MainPage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const fetchingStatus = useAppSelector((state) => state.offersFetchingStatus);
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity.name);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  useEffect(() => {
    if (location.hash) {
      const locationCity = Object.values(CityMap).find((el) => location.hash === `#${el.name.toLocaleLowerCase()}`);
      if (locationCity && locationCity !== activeCity) {
        dispatch(setActiveCity(locationCity));
      }
    }
  }, [activeCity, dispatch, location.hash]);

  const isEmpty = fetchingStatus === RequestStatus.Success && offersByCity.length === 0;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header />
      <main className={classNames('page__main', 'page__main--index', { 'page__main--index-empty': isEmpty })}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        {fetchingStatus === RequestStatus.Error && (
          <NotFoundPage />
        )}
        {fetchingStatus === RequestStatus.Pending && <SpinnerComponent />}
        {isEmpty
          ? <MainEmpty cityName={activeCity.name} />
          : (
            <Cities
              offers = {offersByCity}
              selectedCity = {activeCity}
            />
          )}
      </main>
    </div>
  );
}

export { MainPage };
