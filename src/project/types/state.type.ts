import { store } from '../store/index';
import { OfferPreview, Offer } from '../types/offers.type';
import { RequestStatus, AuthorizationStatus } from '../const/const';
import { User } from '../types/user.types';

type TState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

type TFavoritesData = {
  offers: OfferPreview[];
  offer: Offer | null;
  favorites: OfferPreview[];
  favoritesFetchingStatus: RequestStatus;
};


type TUserData = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  loginSendingStatus: RequestStatus;
}

type  TOffersData ={
  offers: OfferPreview[];
  offersFetchingStatus: RequestStatus;
}

export type { TState, TAppDispatch, TFavoritesData, TUserData, TOffersData };
