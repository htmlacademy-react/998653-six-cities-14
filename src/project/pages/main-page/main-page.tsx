/* eslint-disable no-return-assign */
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { OffersProps } from '../../types/Offers.type';
import { Cities } from '../../components/cities/cities-component';
import {useState } from 'react';

type MainPageProps = {
  offers: OffersProps;
}

function MainPage({ offers } : MainPageProps) {
  const offersByCity: Record<string, OffersProps> = { };

  for(const offer of offers) {
    const city = offer.city.name;

    if (city in offersByCity) {
      offersByCity[city].push(offer);
      continue;
    }

    offersByCity[city] = [offer];
    continue;
  }

  const cities = Object.keys(offersByCity);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - MainPage'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li
                  className="locations__item"
                  key={city}
                >
                  <Link
                    className={classNames(
                      'locations__item-link ',
                      'tabs__item',
                      {
                        'tabs__item--active' :city === selectedCity,
                      }
                    )}
                    to={`#${city.toLowerCase()}`}
                    onClick={() => setSelectedCity(city)}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              ))}


            </ul>
          </section>
        </div>
        <Cities offers = {offers} />
      </main>
    </div>
  );


}

export { MainPage };
