
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './project/store/index';
import App from './project/components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);


