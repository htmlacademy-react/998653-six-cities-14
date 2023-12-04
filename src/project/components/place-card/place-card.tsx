import { OfferPreview } from '../../types/offers.type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import classNames from 'classnames';
import { fetchAddToFavoriteAction } from '../../store/api-actions';
import { useState } from 'react';
import { useAppDispatch} from '../../hooks/index';

type PlaceCardComponentProps = {
  offer: OfferPreview;
  onCardHover?: (id: OfferPreview['id'] | null) => void;
}

function PlaceCardComponent({ offer, onCardHover }: PlaceCardComponentProps) {
  const { isPremium, previewImage, price, type, title, id, isFavorite} = offer;
  const [isBookmarkActive, setBookmarkActive] = useState(isFavorite);
  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {

    dispatch(fetchAddToFavoriteAction({ id, status: Number(!isBookmarkActive) }));
    setBookmarkActive((prev) => !prev);
  };

  const handleMouseEnter = () => {
    onCardHover?.(id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span> Premium </span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={classNames(
              'place-card__bookmark-button',
              'button',
              {
                'place-card__bookmark-button--active ': isFavorite === true,
              })}
            type="button"
            onClick={ handleFavoriteButtonClick }
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { PlaceCardComponent };
