const RentQuantity = {
  quantity: 6
} as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound ='/404'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const OFFER_TYPES = [
  'Private Room',
  'Apartament',
  'House',
  'Hotel',
  'Cursed old house',
] as const;

const MAX_COMMENTS_LENGTH = 1024;
const MIN_COMMENTS_LENGTH = 12;

const CityMap = {
  Paris: 'Paris',
  Cologne: 'Cologne' ,
  Brussels: 'Cologne',
  Amsterdam:'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;


export { RentQuantity, AppRoute, AuthorizationStatus, CITIES, OFFER_TYPES, MAX_COMMENTS_LENGTH, MIN_COMMENTS_LENGTH, CityMap };
