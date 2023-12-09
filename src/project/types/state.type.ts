import { store } from '../store/index';
import { OfferPreview, Offer } from '../types/offers.type';
import { RequestStatus } from '../const/const';

type TState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

type TFavoritesData = {
  offers: OfferPreview[];
  offer: Offer | null;
  favorites: OfferPreview[];
  favoritesFetchingStatus: RequestStatus;
};

export type { TState, TAppDispatch, TFavoritesData };
