import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offers.type';
import { useToggleFavorite } from '../../hooks/use-toggle-favorite';
import { AppRoute } from '../../const/const';
import { getRatingWidth } from '../../utils/offer';

type FavoriteCardProps = {
  offer: OfferPreview;
}

function FavoriteCard({offer} :FavoriteCardProps) {
  const{ id, isPremium, previewImage, price, isFavorite, title, type, rating } = offer;
  const handleFavoriteButtonClick = useToggleFavorite(id, isFavorite);

  const FavoriteLabel = `${isFavorite ? 'In' : 'To' }bookmarks`;

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={ previewImage }
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{FavoriteLabel}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { FavoriteCard };
