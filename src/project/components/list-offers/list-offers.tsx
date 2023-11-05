import PlaceCardComponent from '../../components/place-card/place-card';
import { OffersProps } from '../../types/Offers.type';

type ListOffersComponentProp ={
  offers: OffersProps;
}

function ListOffersComponent ({ offers }: ListOffersComponentProp) {

  return(
    <div className="cities__places-list places__list tabs__content">
      {/* {offers.map((offer) => {
        <PlaceCardComponent
          {...offer}
          key={offer.id}
        />;
      })} */}
      <PlaceCardComponent offer={offers[0]} />
    </div>
  );
}

export { ListOffersComponent };
