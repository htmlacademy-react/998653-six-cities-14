import { createAction } from '@reduxjs/toolkit';
import { Offer, City } from '../types/offers.type';
import { NameSpace } from '../const/const';

const fetchOffers = createAction(`${NameSpace.Offers}/fetchOffers`);
const fetchOffer = createAction<Offer['id']>(`${NameSpace.Offer}/fetchOffer`);
const fetchNearPlaces = createAction<Offer['id']>(`${NameSpace.NearPlaces}/fetchNearPlaces`);
const fetchReviews = createAction<Offer['id']>(`${NameSpace.Reviews}/fetchReviews`);
const dropReviewSendingStatus = createAction(`${NameSpace.Reviews}/dropReviewSendingStatus`);
const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);
const setActiveCity = createAction<City>(`${NameSpace.Offers}/setActiveCity`);

export {fetchOffers, fetchOffer, fetchNearPlaces, fetchReviews, dropReviewSendingStatus, dropOffer, setActiveCity };
