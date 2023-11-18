import { faker } from '@faker-js/faker';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { OfferPreviewProps } from '../../types/Offers.type';
import { Cities } from '../../components/cities/cities-component';
import {useState } from 'react';
import { CITIES  } from '../../const/const';

 type MainPageProps = {
  offers: OfferPreviewProps;
}

type offersByCityProps ={
  offersByCity: Record<string, OfferPreviewProps>;
}

function MainPage({ offers } : MainPageProps) {

  const offersByCity: offersByCityProps = {}; // наполняем разделенными офферами по городам
  for(const offer of offers) {
    const cityByOffer = offer.city.name; //

    if(!offersByCity[cityByOffer]) {
      offersByCity[cityByOffer] = [];
    }
      //в конкретный ключ  конкретного города текущего офера добавляем оффер
      offersByCity[cityByOffer].push(offer);
  }
  const cities = Object.keys(offersByCity).toSorted();
  const [selectedCity, setSelectedCity] = useState(cities[4]);

  const [activeOffer, setOffer] = useState<null | string>(null);


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - MainPage'}</title>
      </Helmet>
      <Header isAuthorized={faker.datatype.boolean()} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities
                .slice(0, 10)
                .map((city) => (
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
        <Cities
          offers = {offersByCity[selectedCity]}
          setActive={ setOffer }
          selectedCity = { selectedCity}
          city ={ CITIES }
        />
      </main>
    </div>
  );
}

export { MainPage };
