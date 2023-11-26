import { createAction } from '@reduxjs/toolkit';
import { Offer, City } from '../types/offers.type';


const fetchOffers = createAction('offers/fetch');
const fetchOffer = createAction<Offer['id']>('offer/fetch');
const fetchNearPlaces = createAction('nearOffers/fetch');
const fetchReviews = createAction<Offer['id']>('reviews/fetch');
const dropOffer = createAction('offer/dropOffer');
const setActiveCity = createAction<City>('offers/setActiveCity');
const fetchFavoriteOffers = createAction('favorites/fetch');

export {fetchOffers, fetchOffer, fetchNearPlaces, fetchReviews, dropOffer, setActiveCity, fetchFavoriteOffers};
