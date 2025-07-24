import { RouterProvider } from 'react-router-dom';
import './output.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { routers } from './routes/routes';

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
