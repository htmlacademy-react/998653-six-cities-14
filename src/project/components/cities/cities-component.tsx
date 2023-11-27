import { PlaceCardComponent } from '../../components/place-card/place-card';
import { OfferPreview } from '../../types/offers.type';
import { useState } from 'react';
import { Map } from'../../components/map/map';
import { CityMap } from '../../const/const';
import { Sorting } from '../../components/sorting/sorting';
import { TSorting } from '../../types/sorting.type';
import { SortingMap } from '../../const/const';
import { sorting } from '../../utils/offer';

type CitiesProps = {
  offers: OfferPreview[];
  selectedCity: string;
}

function Cities ({offers, selectedCity }: CitiesProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferPreview['id'] | null >(null);
  const activeCity = CityMap.Amsterdam;

  const handleCardHover = (offerId: OfferPreview['id'] | null) => {
    setHoveredOfferId(offerId);
  };

  const [activeSortItem, setActiveSortItem] = useState<TSorting>(SortingMap.Popular);

  function getSortingOffers(label: TSorting) {
    switch (label) {
      case SortingMap.Popular:
        return sorting.Popular(offers);
      case SortingMap.HighToLow:
        return sorting.HighToLow(offers);
      case SortingMap.LowToHigh:
        return sorting.LowToHigh(offers);
      case SortingMap.TopRated:
        return sorting.TopRated(offers);
    }
    return sorting.Popular(offers);
  }

  let sortedOffers: OfferPreview[] = getSortingOffers(activeSortItem);

  const handleSortOffers = (label: TSorting) => {
    sortedOffers = getSortingOffers(label);
    setActiveSortItem(label);
    return sortedOffers;
  };


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {offers.length} places to stay in {selectedCity}</b>
          <Sorting
            activeSorting={activeSortItem}
            onChange={handleSortOffers}
          />
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
          <section className="cities__map map">
            <Map
              location={activeCity.location}
              offers={sortedOffers}
              specialOfferId={hoveredOfferId}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export { Cities };
