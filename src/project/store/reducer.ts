import { createReducer } from '@reduxjs/toolkit';
import { mockedOffers } from '../mocks/offers';
import { mockedReviews } from '../mocks/rewiews';
import { Offer, OfferPreview, City } from '../types/offers.type';
import { Comment } from '../types/comments.type';
import { CityMap } from '../const/const';
import {fetchOffers, fetchOffer, fetchNearPlaces, fetchReviews, dropOffer, setActiveCity, fetchFavoriteOffers} from './actions';

const initalState: {
  offers: OfferPreview[];
  nearPlaces: OfferPreview[];
  reviews: Comment[];
  offer: Offer | null;
  favorites: OfferPreview[];
  activeCity: City;
} = {
  offers: [],
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: CityMap.Paris,
};

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = mockedOffers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = mockedOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = mockedOffers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = mockedReviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavoriteOffers, (state) => {
      state.favorites = mockedOffers.filter((offer) => offer.isFavorite);
    });

});
export { reducer };
