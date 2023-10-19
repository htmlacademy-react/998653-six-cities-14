import { MainPage } from '../../pages/main-page/main-page';
import { RentCount } from '../../const/const';

function App() {
  return (
    <MainPage props={RentCount.count} />
  );
}

export default App;
