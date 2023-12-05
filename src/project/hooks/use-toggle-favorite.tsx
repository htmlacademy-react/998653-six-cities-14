import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '.';
import { fetchToggleFavoriteAction } from '../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../const/const';

type TUseToggleFavoriteReturn = () => void;

function useToggleFavorite(id?: string, initValue = false): TUseToggleFavoriteReturn {
  const [toggled, setToggled] = useState(initValue);
  const isAuthorized = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleToggleFavorite = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }

    if (!id) {
      return;
    }
    dispatch(fetchToggleFavoriteAction({ id, status: Number(!toggled)}));
    setToggled((prev) => !prev);
  };

  return handleToggleFavorite;
}

export { useToggleFavorite };
