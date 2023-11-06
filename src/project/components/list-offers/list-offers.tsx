import PlaceCardComponent from '../../components/place-card/place-card';
import { OffersProps } from '../../types/Offers.type';
// import { mockedOffer } from '../../mocks/offers';
import { useState } from 'react';

type ListOffersComponentProps ={
  offers: OffersProps;
}


function ListOffersComponent ({ offers }: ListOffersComponentProps) {
  const[isActive, setActive] = useState(false);

  return(
    <div className="cities__places-list places__list tabs__content">
      {isActive && (
        <p>Карточка активна</p>)}
      {offers.map((offersItem) => (
        <PlaceCardComponent
          offer={offersItem}
          key={offersItem.id}
          setState={
            ()=> setActive((prevState) => !prevState)
          }
        />
      ))}
    </div>
  );

  // return (
  //   <div className="cities__places-list places__list tabs__content">
  //     {isActive && (
  //       <p>Карточка активна</p>
  //     )}
  //     <PlaceCardComponent
  //       offer={mockedOffer}
  //       setState={
  //         ()=> setActive((prevState) => !prevState)
  //       }
  //     />
  //   </div>
  // );

}

export { ListOffersComponent };
