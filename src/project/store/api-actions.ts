import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Tstate, TAppDispatch } from '../types/state.type';
import { Offer } from '../types/offers.type';
import { fetchOffers, fetchAuthStatus} from '../store/actions';
import { AuthorizationStatus, APIRoute } from '../const/const';


const fetchLoginPage = createAsyncThunk<void, unknown>();
