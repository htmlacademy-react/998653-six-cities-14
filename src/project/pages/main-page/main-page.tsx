import { faker } from '@faker-js/faker';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Cities } from '../../components/cities/cities-component';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/actions';
import { CityMap } from '../../const/const';

function MainPage() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const offersByCity = useAppSelector((state) => state.offers.filter((el) => el.city.name === activeCity.name));
  const cities = Object.values(CityMap);

  const dispatch = useAppDispatch();

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
                    key={city.name}
                  >
                    <Link
                      className={classNames(
                        'locations__item-link ',
                        'tabs__item',
                        {
                          'tabs__item--active' :city.name === activeCity.name,
                        }
                      )}
                      to={`#${city.name.toLowerCase()}`}
                      onClick={() => dispatch(setActiveCity(city))}
                    >
                      <span>{city.name}</span>
                    </Link>
                  </li>
                ))}

            </ul>
          </section>
        </div>
        <Cities
          offers = {offersByCity}
          selectedCity = {activeCity}
        />
      </main>
    </div>
  );
}

export { MainPage };
