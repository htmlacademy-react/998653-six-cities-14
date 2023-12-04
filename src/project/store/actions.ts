import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers.type';
import { AppRoute, NameSpace } from '../const/const';

const dropReviewSendingStatus = createAction(`${NameSpace.Reviews}/dropReviewSendingStatus`);
const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);
const setActiveCity = createAction<City>(`${NameSpace.Offers}/setActiveCity`);
const setError = createAction<Error>('app/setError');
const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export {dropReviewSendingStatus, dropOffer, setActiveCity, setError, redirectToRoute };
