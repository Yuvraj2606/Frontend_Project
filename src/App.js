import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dashboard } from './modules/dashboard/pages/Dashboard';
import { NotePage } from "./modules/notes/pages/NotePage";
import { Provider } from 'react-redux';
import store from './shared/store/store';

function App() {
  return(
    // hme ek browser router bithana pdega sbse upr on whole page or dashboard
    <Provider store={store}>
    <BrowserRouter>
      <Dashboard/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
