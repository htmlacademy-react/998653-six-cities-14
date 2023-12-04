import { FavoriteCard } from '../../components/favorite-card/favorite-card';
import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offers.type';

type FavoritesListProps = [
  offers: OfferPreview[],
];

function FavoritesList ({offers}: FavoritesListProps){
  //избранные офферы для активного города
  const CitiesList = new Set(offers.map((offer) => offer.city.name)).toSorted();

  return(
    <ul className="favorites__list">
      {CitiesList.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offers
              .filter((offer) => offer.city.name === city)
              .map((offer) => (
                <FavoriteCard offer={offer} key={offer.id}/>
              ))}
          </div>
        </li>
      ))}

    </ul>
  );
}

export { FavoritesList };
