import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';

type TProtectedRoute = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children
}:TProtectedRoute) {
  const authorizationStatus = AuthorizationStatus.Auth;

  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}
export { ProtectedRoute };
