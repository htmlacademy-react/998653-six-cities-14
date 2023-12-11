import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const/const';
import { TOffersData } from '../../types/state.type';
import { fetchOffers} from '../../store/api-actions';

const initalState:TOffersData = {
  offers: [],
  offersFetchingStatus: RequestStatus.Idle,
};

const OffersData = createSlice(
  {
    name: NameSpace.Offer,
    initalState,
    reducers:{},
    extraReducers(builder) {
      builder
        .addCase(fetchOffers.pending, (state) => {
          state.offersFetchingStatus = RequestStatus.Pending;
        })
        .addCase(fetchOffers.fulfilled, (state, action) => {
          state.offersFetchingStatus = RequestStatus.Success;
          state.offers = action.payload;
        });
    },
  }
);

export const { setActiveCity } = OffersData ;

