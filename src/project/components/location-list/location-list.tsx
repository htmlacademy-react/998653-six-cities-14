import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { CityMap } from '../../const/const';

function LocationList() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityMap)
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
  );
}

export { LocationList };

