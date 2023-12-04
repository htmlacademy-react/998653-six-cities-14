import { Comment } from '../../types/comments.type';
import { ReviewItem } from '../../components/review-item/review-item';
import { ReviewForm } from '../../components/review-form/review-form';
import { MAX_REVIEWS_COUNT } from '../../const/const';


type ReviewFormProps ={
  reviews: Comment[];
};

function ReviewList ({reviews}: ReviewFormProps) {
  const sortedReviews = reviews.slice().sort((reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime());

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
      <ReviewForm offerId={'хз'} />
    </>
  );
}

export { ReviewList };
