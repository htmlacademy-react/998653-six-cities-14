import { createSelector } from '@reduxjs/toolkit';
import { TFavoritesData, TState } from '../../types/state.type';
import { NameSpace } from '../../const/const';

const getFavorites = createSelector(
  (state: TState) => state[NameSpace.Favorites], // из  примера академии
  (state: TFavoritesData) => state.favorites
);

const getFetchingStatus = createSelector(
  (state: TState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.favoritesFetchingStatus
);

export { getFavorites, getFetchingStatus };
