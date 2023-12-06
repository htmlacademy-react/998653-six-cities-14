import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { login } from '../../store/api-actions';
import { AppRoute, CityMap, RequestStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropLoginSendingStatus } from '../../store/reducer';

function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const loginSendingStatus = useAppSelector((state) => state.loginSendingStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      setWasSubmitted(true);
    }
  };

  useEffect(() => {
    if (wasSubmitted && loginSendingStatus === RequestStatus.Success) {
      dispatch(dropLoginSendingStatus());
      navigate(AppRoute.Main);
    }
  }, [dispatch, loginSendingStatus, navigate, wasSubmitted]);

  const cities = Object.values(CityMap);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - Login'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern='^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Main}#${randomCity.name.toLocaleLowerCase()}`}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export { LoginPage };
