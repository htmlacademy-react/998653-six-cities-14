import { useState, useCallback, useMemo} from 'react';
import { PlaceCardMemo } from '../place-card/place-card';
import { City, OfferPreview } from '../../types/offers.type';
import { Map } from'../map/map';
import { SortingMemo } from '../sorting/sorting';
import { TSorting } from '../../types/sorting.type';
import { SortingMap } from '../../const/const';
import { sorting } from '../../utils/offer';

type CitiesProps = {
  offers: OfferPreview[];
  selectedCity: City;
}

function Cities ({ selectedCity, offers }: CitiesProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferPreview['id'] | null >(null);

  const handleCardHover = useCallback(
    (offerId: OfferPreview['id'] | null) => {
      setHoveredOfferId(offerId);
    }, []
  );

  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  // const getSortingOffers = (label: TSorting) => {
  //   switch (label) {
  //     case 'HighToLow':
  //       return sorting.HighToLow(offers);
  //     case 'LowToHigh':
  //       return sorting.LowToHigh(offers);
  //     case 'TopRated':
  //       return sorting.TopRated(offers);
  //     case 'Popular':
  //     default:
  //       return sorting.Popular(offers);
  //   }
  // };

  // let sortedOffers: OfferPreview[] = getSortingOffers(activeSortItem);

  const sortedOffers = useMemo(
    () => sorting[activeSorting](offers),[activeSorting, offers]
  );

  const handleSortOffers = useCallback(
    (newSorting) => setActiveSorting(newSorting),
    []
  );


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {offers.length} {offers.length === 1 ? 'place' : 'places'} to stay in {selectedCity.name}</b>
          <SortingMemo
            activeSorting={activeSorting}
            onChange={handleSortOffers}
          />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => (
              <PlaceCardMemo
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
              location={selectedCity.location}
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
