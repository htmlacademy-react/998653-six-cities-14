import { PlaceCardComponent } from '../../components/place-card/place-card';
import {OfferPreviewProps, offersByCityProps } from '../../types/Offers.type';
import { useState } from 'react';

type CitiesProps = {
  offersByCity: offersByCityProps;
  setActive: () => void;
}

function Cities ({ offersByCity, setActive,  }: CitiesProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState(null);

  const handleCardHover = (offerId: OfferPreviewProps['id'] | null) => {
    setHoveredOfferId(offerId);
  };


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          {/* <b className="places__found"> {offersByCity[0].lengh} places to stay in {''}</b> */}
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCardComponent
                offer={offer}
                key={offer.id}
                onCardHover={handleCardHover}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  );
}

export { Cities };
