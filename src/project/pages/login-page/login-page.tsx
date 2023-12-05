import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { FormEvent, useRef } from 'react';
import { login } from '../../store/api-actions';
import { AppRoute } from '../../const/const';
import { useAppDispatch } from '../../hooks';

function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - Login'}</title>
      </Helmet>
      <Header />
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit} //не уходит запрос
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
                ref = {passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                minLength={3}
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
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </div>

  );
}

export { LoginPage };
