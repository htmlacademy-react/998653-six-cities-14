import { Comment } from '../../types/Comments.type';
import { getRatingWidth } from '../../utils/offer';
const dateFormatter = new Intl.DateTimeFormat(
  'en-Us',
  {
    month: 'long',
    year: 'numeric'
  }
);

type ReviewItemProps= {
  review: Comment;
};

function ReviewItem({review}:ReviewItemProps) {
  const {user, comment, date, rating} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {dateFormatter.format(new Date(date))}
        </time>
      </div>
    </li>
  );
}

export {ReviewItem};
