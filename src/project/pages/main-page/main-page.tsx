import { faker } from '@faker-js/faker';


import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header } from '../../components/header/header';
import { LocationList } from '../../components/location-list/location-list';
import { Cities } from '../../components/cities/cities-component';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { NotFoundPage } from '../404-page/404-page';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/actions';
 //

import { RequestStatus, } from '../../const/const';

function MainPage() {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector((state) => state.offersFetchingStatus);
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity.name);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header isAuthorized={faker.datatype.boolean()} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        {fetchingStatus === RequestStatus.Error && (
          <NotFoundPage />
        )}
        {fetchingStatus === RequestStatus.Pending && <SpinnerComponent />}
        {fetchingStatus === RequestStatus.Success && (
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
