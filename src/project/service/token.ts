import { TToken } from '../types/token';

const AUTH_TOKEN_NAME = 'six-cities-token';

const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? ' ';
};

const saveToken = (token: TToken) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

export { getToken, saveToken, dropToken };
