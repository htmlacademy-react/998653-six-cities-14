import { Comment } from '../../types/Comments.type';
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
  const {user} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {dateFormatter.format(new Date())}
        </time>
      </div>
    </li>
  );
}

export {ReviewItem};
