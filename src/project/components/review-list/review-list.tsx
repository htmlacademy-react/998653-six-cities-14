import { Comment } from '../../types/Comments.type';
import { ReviewItem } from '../review-item/review-item';
import { ReviewForm } from '../review-form/review-form';
import { AuthorizationStatus, MAX_REVIEWS_COUNT } from '../../const/const';
import { Offer } from '../../types/offers.type';
import { useAppSelector } from '../../hooks';


type ReviewFormProps ={
  offerId: Offer['id'];
  reviews: Comment[];
};

function ReviewList ({offerId, reviews}: ReviewFormProps) {
  const sortedReviews = reviews.slice().sort((reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime());
  const isAuthorized = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);

  return (
    <>
      <ul className="reviews__list">
        <div>
          {sortedReviews.slice(0, MAX_REVIEWS_COUNT).map((review) => (
            <ReviewItem
              review={review}
              key={review.id}
            />
          ))}
        </div>
      </ul>
      {isAuthorized && <ReviewForm offerId={offerId} />}
    </>
  );
}

export { ReviewList };
