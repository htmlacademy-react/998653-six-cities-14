import { createReducer } from '@reduxjs/toolkit';
import { Offer, OfferPreview, City } from '../types/offers.type';
import { Comment } from '../types/comments.type';
import { User } from '../types/user.types';
import { CityMap, AuthorizationStatus, RequestStatus } from '../const/const';
import { dropReviewSendingStatus, dropOffer, setActiveCity } from './actions';
import { fetchOffers, fetchOffer, fetchReviews, postRewiew, fetchNearPlaces, fetchFavorites, checkAuth, login, logout } from '../store/api-actions';


const initalState: {
  offers: OfferPreview[];
  offersFetchingStatus: RequestStatus;
  nearPlaces: OfferPreview[];
  reviews: Comment[];
  reviewsFetchingStatus: RequestStatus;
  reviewsSendingStatus: RequestStatus;
  offer: Offer | null;
  offerFetchingStatus: RequestStatus;
  favorites: OfferPreview[];
  favoritesFetchingStatus: RequestStatus;
  activeCity: City;
  authorizationStatus: AuthorizationStatus;
  user: User;
  loginSendingStatus: RequestStatus;
} = {
  offers: [],
  offersFetchingStatus: RequestStatus.Idle,
  nearPlaces: [],
  reviews: [],
  reviewsFetchingStatus: RequestStatus.Idle,
  reviewsSendingStatus: RequestStatus.Idle,
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
  activeCity: CityMap.Paris,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null, // неправильный тип для авторизованного пользователя  = посмотреть спеку:
  // https://14.design.pages.academy/spec/project/six-cities
  loginSendingStatus: RequestStatus.Idle,
};

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.offersFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Error;
    })

    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload ;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewsFetchingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Error;
    })
    .addCase(postRewiew.pending, (state) => {
      state.reviewsSendingStatus = RequestStatus.Pending;
    })
    .addCase(postRewiew.fulfilled, (state, action) => {
      state.reviewsSendingStatus = RequestStatus.Success;
      state.reviews.push(action.payload);
    })
    .addCase(postRewiew.rejected, (state) => {
      state.reviewsSendingStatus = RequestStatus.Error;
    })
    .addCase(dropReviewSendingStatus, (state) => {
      state.reviewsSendingStatus = RequestStatus.Idle;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites.pending, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesFetchingStatus = RequestStatus.Success;
      state.favorites = action.payload;
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Error;
    })
    .addCase(checkAuth.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.Unknown;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuth.rejected, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loginSendingStatus = RequestStatus.Success;
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(login.rejected, (state) => {
      state.loginSendingStatus = RequestStatus.Error;
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    // .addCase(dropLoginSendingStatus, (state) => {
    //   state.loginSendingStatus = RequestStatus.Idle;
    // })
    .addCase(logout.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
export { reducer };
