import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Offer } from '../../types/offers.type';
import { ReviewList } from '../../components/review-list/review-list';
import classNames from 'classnames';
import { Map } from '../../components/map/map';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { PlaceCardComponent } from '../../components/place-card/place-card';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch} from '../../hooks/index';
import { MAX_NEAR_PLACES_COUNT } from '../../const/const';
import { fetchOffer, fetchNearPlaces, fetchReviews} from '../../store/api-actions';
import { dropOffer } from '../../store/actions';

function OfferPage() {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const isOffersLoaded = useAppSelector((state) => state.offersFetchingStatus);
  const nearPlaces = useAppSelector((state) => state.nearPlaces);
  const nearPlacesToRender = nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT);
  const reviews = useAppSelector((state) => state.reviews);
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null >(null);
  const handleCardHover = (id: Offer['id'] | null) => {
    setHoveredOfferId(id);
  };

  useEffect(() =>{
    if(offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchNearPlaces(offerId));
      dispatch(fetchReviews(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  if (!offer) {
    return <SpinnerComponent />;
  }

  //нам нужна эта проверка?
  if(!isOffersLoaded) {
    return <SpinnerComponent />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${offer.title}`}</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.slice(0, 6).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={offer.description} />
                </div>
              ))}

            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
            Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{893}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) =>(
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className= {classNames(
                    'offer__avatar-wrapper',
                    {
                      'offer__avatar-wrapper--pro': offer.host.isPro,
                    },
                    'offer__avatar-wrapper'
                  )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                 Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ReviewList reviews={reviews}/>
              </section>
            </div>
          </div>
          <Map
            location={ offer.city.location}
            offers={ nearPlacesToRender }
            specialOfferId={hoveredOfferId}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearPlacesToRender.map((offerPreview) => (
                <PlaceCardComponent
                  offer={offerPreview}
                  key={offerPreview.id}
                  onCardHover={handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}
export { OfferPage };
