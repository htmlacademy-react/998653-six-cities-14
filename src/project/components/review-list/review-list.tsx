import { CommentsProps } from '../../types/Comments.type';
import { ReviewItem } from '../../components/review-item/review-item';
import { ReviewForm } from '../../components/review-form/review-form';
import { faker } from '@faker-js/faker';

type ReviewFormProps ={
  reviews: CommentsProps;
};

function ReviewList ({reviews}: ReviewFormProps) {
  return (
    <>
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
      <ReviewForm isAuthorized={faker.datatype.boolean()} /> 
    </>
  );
}

export { ReviewList };
