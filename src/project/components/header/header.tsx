import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RequestStatus } from '../../const/const';
import { useAppSelector, useAppDispatch} from '../../hooks';
import { Logo } from '../../components/logo/logo';
import { fetchFavorites, logout } from '../../store/api-actions';
import { useEffect } from 'react';

function Header() {
  const user = useAppSelector((state) => state.user);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const favorites = useAppSelector((state) => state.favorites);
  const favoritesStatus = useAppSelector((state) => state.favoritesFetchingStatus);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && favoritesStatus === RequestStatus.Idle) {
      dispatch(fetchFavorites());
    }
  }, [authorizationStatus, dispatch, favoritesStatus]);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className='header__logo-link'
              to={AppRoute.Main}
            >
              <Logo />
            </Link>

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.Auth && user
                  ?
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
              {authorizationStatus === AuthorizationStatus.Auth
                &&
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={AppRoute.Login}
                    onClick={handleLogoutClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}
export { Header };
