import { MainPage } from '../../pages/main-page/main-page';
import { RentQuantity } from '../../const/const';

function App() {
  return (
    <MainPage props={RentQuantity.quantity} />
  );
}

export default App;
