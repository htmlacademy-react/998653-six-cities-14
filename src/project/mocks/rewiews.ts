import { faker } from '@faker-js/faker';
import { Comment } from '../types/Comments.type';

const mockReview = ():Comment => ({
  comment: faker.lorem.sentences(2),
  date: '2023-11-06T13:32:37.950Z',
  id: faker.number.int({ min: 1, max: 100 }),
  rating: faker.number.float({ min: 1, max: 5, precision: 0.1}),
  user: {
    avatarUrl: faker.internet.avatar(),
    id: faker.number.int({ min: 1, max: 100 }),
    isPro: faker.datatype.boolean(),
    name: faker.internet.userName()
  }
});

const mockedReviews = Array.from({length: 10}, () => mockReview());
export { mockedReviews } ;
