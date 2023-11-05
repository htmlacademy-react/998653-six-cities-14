import PlaceCardComponent from '../../components/place-card/place-card';
// import { OffersProps } from '../../types/Offers.type';
import { Offer } from '../../types/Offers.type';
import { mockedOffer } from '../../mocks/offers';

// type ListOffersComponentProp ={
//   offers: OffersProps;
// }

type ListOffersComponentProps = {
  offer: Offer;
}

function ListOffersComponent ({ offer }: ListOffersComponentProps) {
  //как вычленить offersItem из offer?

  // const offersByCity: Record<string, OffersProps> = {};

  // for(const offersItem of offers) {
  //   const city = offersItem.city.name;
  //   if (city in offersByCity) {
  //     offersByCity[city].push(offersItem);
  //     continue;
  //   }
  //   offersByCity[city] = [offersItem];
  //   continue;
  // }

  // return(
  //   <div className="cities__places-list places__list tabs__content">
  //     {offers.map((offersItem) => (
  //       <PlaceCardComponent
  //         offer={offersItem}
  //         key={offersItem.id}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCardComponent offer={mockedOffer}/>
    </div>
  );

}

export { ListOffersComponent };
