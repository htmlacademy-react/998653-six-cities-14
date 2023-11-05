import { faker } from '@faker-js/faker';
import { Location, Host, Offer } from '../types/Offers.type';
import { CITIES, OFFER_TYPES } from '../const/const';

const mockLocation = ():Location => ({
  latitude: faker.location.latitude({ max: 10, min: -10, precision: 5 }),
  longitude: faker.location.longitude({ max: 10, min: -10, precision: 5 }),
  zoom: faker.number.int({ min: 1, max: 5 }),
});

const moskHost = ():Host => ({
  avatarUrl: faker.internet.avatar(),
  id: faker.number.int({ min: 1, max: 100 }),
  isPro: faker.datatype.boolean(),
  name: faker.internet.userName()
});

export const mockOffer = ():Offer => ({
  bedrooms: faker.number.int({ min: 1, max: 5 }),
  city: {
    location: mockLocation(),
    name: faker.helpers.arrayElement(CITIES),
  },
  description: faker.lorem.sentences(2),
  goods: faker.lorem.words(5).split(' '),
  host: moskHost(),
  id: faker.string.uuid(),
  images: Array.from({ length: faker.number.int({max: 12, min: 0 }) }, () => faker.image.urlLoremFlickr ({category: 'apartament'})),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  location: mockLocation(),
  maxAdults: faker.number.int({ min: 1, max: 5 }),
  previewImage: faker.image.urlLoremFlickr({ width: 128, height: 128, category: 'nature' }),
  price: faker.number.int({ min: 100, max: 1000 }),
  rating: faker.number.float({ min: 1, max: 5, precision: 0.1}) ,
  title: faker.location.streetAddress(),
  type: faker.helpers.arrayElement(OFFER_TYPES),
});

export const mockedOffer = mockOffer();
export const mockedOffers = Array.from({ length: 50 }, () => mockOffer());


