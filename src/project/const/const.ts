const RentQuantity = {
  quantity: 6
} as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
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

export { RentQuantity, AppRoute, AuthorizationStatus, CITIES, OFFER_TYPES };
