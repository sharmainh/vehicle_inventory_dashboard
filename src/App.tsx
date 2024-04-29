
// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from "./config/routes";
import Layout from "./components/Layout";
import { Provider } from 'react-redux';
import store from './redux/store'
import Dashboard from './pages/Dashboard';
import Inventory from "./pages/Inventory";
import Home from "./pages/Home";
 
    function App() {
     return (
     
      <BrowserRouter>
      <Layout />
      <Provider store={store}>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
          )) }
        </Routes>
      </Provider>
      </BrowserRouter>

      );
    }

export default App;
