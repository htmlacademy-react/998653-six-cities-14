import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { Offer, OfferPreview, City } from '../types/offers.type';
import { Comment } from '../types/Comments.type';
import { User } from '../types/user.types';
import { CityMap, AuthorizationStatus, RequestStatus } from '../const/const';
import { dropReviewSendingStatus, dropOffer, setActiveCity } from './actions';
import { fetchOffers, fetchOffer, fetchReviews, postRewiew, fetchNearPlaces, fetchFavorites, checkAuth, login, logout, fetchToggleFavoriteAction } from '../store/api-actions';


const initialState: {
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
  user: User | null;
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
  user: null,
  loginSendingStatus: RequestStatus.Idle,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    dropLoginSendingStatus: (state) => {
      state.loginSendingStatus = RequestStatus.Idle;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<typeof initialState>) => {
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
      .addCase(fetchToggleFavoriteAction.fulfilled, (state, action) => {
        const idx = state.offers.findIndex((el) => el.id === action.payload.id);
        state.offers[idx] = action.payload;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((el) => el.id !== action.payload.id);
        }

        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(checkAuth.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
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
      })
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

const { reducer } = appSlice;

export const {
  dropLoginSendingStatus,
} = appSlice.actions;

export { reducer };
