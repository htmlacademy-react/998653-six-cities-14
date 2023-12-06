import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import { useAppSelector } from '../../hooks';

type TProtectedRoute = {
  restrictedFor: AuthorizationStatus[];
  redirectTo: AppRoute;
  children: JSX.Element;
}

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children
}:TProtectedRoute) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return restrictedFor.includes(authorizationStatus) ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}
export { ProtectedRoute };
