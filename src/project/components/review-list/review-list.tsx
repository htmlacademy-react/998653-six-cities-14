import { CommentsProps } from '../../types/Comments.type';
import { ReviewItem } from '../../components/review-item/review-item';
import { ReviewForm } from '../../components/review-form/review-form';

type ReviewFormProps ={
  reviews: CommentsProps;
};

function ReviewList ({reviews}: ReviewFormProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        <div>
          {reviews.map((review) => (
            <ReviewItem
              review={review}
              key={review.id}
            />
          ))}
        </div>
      </ul>
      <ReviewForm />
    </section>
  );
}

export { ReviewList };
