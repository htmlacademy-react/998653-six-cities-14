import { createSlice } from '@reduxjs/toolkit';
import { TFavoritesData } from '../../types/state.type';
import { RequestStatus } from '../../const/const';
import { NameSpace } from '../../const/const';
import { fetchFavorites, fetchToggleFavoriteAction } from '../../store/api-actions';

const initialState: TFavoritesData = {
  offers: [],
  offer: null,
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
};

const FavoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
        const idx = state.offers.findIndex((el: { id: string }) => el.id === action.payload.id);
        state.offers[idx] = action.payload;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((el) => el.id !== action.payload.id);
        }

        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });

  },
});

export { FavoritesData };
