import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { CITIES } from '../../const/const';

//по какому массиву мы будем мапаться?

function LocationList() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES
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
                    'tabs__item--active' :city === activeCity.name,
                  }
                )}
                to={`#${city.toLowerCase()}`}
                onClick={() => dispatch(setActiveCity(city))}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}

      </ul>
    </section>
  );
}

export { LocationList };

