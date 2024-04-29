import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Layout from "./components/Layout";
import { Provider } from 'react-redux';
import store from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0.config';
 
    function App() {
     return (
      <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
     
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
      </Auth0Provider>
      );
    }

export default App;
