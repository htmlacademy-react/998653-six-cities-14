const RentQuantity = {
  quantity: 6
} as const;

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;


export { RentQuantity, AppRoute };
