import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Offer, OfferPreview, AddToFavoritesData } from '../types/offers.type';
import { Comment, CommentByOfferId } from '../types/Comments.type';
import { TState, TAppDispatch } from '../types/state.type';
import { User } from '../types/user.types';
import { LoginData } from '../types/login-data';

import { NameSpace, APIRoute } from '../const/const';
import { saveToken, dropToken } from '../service/token';


type TExtra = {
  extra: AxiosInstance;
};

type TLogin = TExtra & {
  dispatch: TAppDispatch;
  state: TState;
}
const fetchOffers = createAsyncThunk<OfferPreview[], undefined, TExtra>(
  `${NameSpace.Offers}/fetchOffers`,
  async(_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);

    return data;
  }
);

const fetchOffer = createAsyncThunk<Offer, Offer['id'], TExtra>(
  `${NameSpace.Offer}/fetchOffer`,
  async(OfferId, {extra: api}) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${OfferId}`);
    return data;
  }
);

const fetchReviews = createAsyncThunk<Comment[], Offer['id'], TExtra>(
  `${NameSpace.Reviews}/fetchReviews`,
  async(OfferId, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${OfferId}`);

    return data;
  }
);

const postRewiew = createAsyncThunk<
  Comment,
  { commentByOfferId: CommentByOfferId; offerId: Offer['id']},
  TExtra
>(
  `${NameSpace.Reviews}/postReview`,
  async ({ commentByOfferId, offerId }, { extra: api }) => {
    const { data } = await api.post<Comment>(
      `${APIRoute.Comments}/${offerId}`,
      commentByOfferId
    );

    return data;
  }
);

const fetchNearPlaces = createAsyncThunk<
  OfferPreview[],
  Offer['id'],
  TExtra
  >(
    `${NameSpace.NearPlaces}/fetchNearPlaces`,
    async(offerId, { extra: api }) => {
      const { data } = await api.get<OfferPreview[]>(
        `${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`
      );

      return data;
    }
  );

const fetchFavorites = createAsyncThunk<
  OfferPreview[],
  undefined,
  TExtra
>(
  `${NameSpace.Favorites}/fetchFavoriteOffers`,
  async(_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Favorite}`);

    return data;
  }
);

export const fetchToggleFavoriteAction = createAsyncThunk<OfferPreview, AddToFavoritesData, TExtra >(
  'data/fetchToggleFavoriteAction',
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<OfferPreview>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

const checkAuth = createAsyncThunk<User, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async(_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);

    return data;
  }
);

const login = createAsyncThunk<User, LoginData, TLogin>(
  `${NameSpace.User}/login`,
  async(loginData, { extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, loginData);
    saveToken(data.token);

    return data;
  }
);

const logout = createAsyncThunk<void, undefined, TExtra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { fetchOffers, fetchOffer, fetchReviews, postRewiew, fetchNearPlaces, fetchFavorites, checkAuth, login, logout };
