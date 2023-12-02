import axios, { AxiosInstance, AxiosError, AxiosRequestConfig} from 'axios';
import { StatusCodes } from 'http-status-codes';

import { getToken } from './token';
//что за browserHistory
import { browserHistory } from '../browser-history';
import { AppRoute } from '../const/const';


// const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const BACKEND_URL = import.meta.env.BASE_URL;
const REQUEST_TIMEOUT = 5000;


const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout : REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if(token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if(error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.NotFound);
      }
      throw error;
    }
  );

  return api;
};

export { createAPI };

