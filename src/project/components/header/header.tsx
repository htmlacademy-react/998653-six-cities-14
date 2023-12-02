import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const/const';
import { useAppSelector} from '../../hooks';
import { RequestStatus } from '../../const/const';

type HeaderProps ={
  hideNavigation?: boolean;
}

function Header({
  hideNavigation = false,
}: HeaderProps) {

  const { pathname } = useLocation();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className= {classNames(
                'header__logo-link',
                {
                  'header__logo-link--active':pathname === AppRoute.Main //хз?
                }
              )}
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="{81}"
                height="{41}"
              />
            </Link>

          </div>
          { !hideNavigation && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === RequestStatus.Error && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                      </span>
                      <span className="header__favorite-count">3</span>
                    </Link>

                  </li>
                )}
                {authStatus === RequestStatus.Success && (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">Sign out</span>
                    </Link>

                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>

  );
}
export { Header };
