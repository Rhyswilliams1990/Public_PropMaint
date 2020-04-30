import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RexuxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { Auth0Provider } from './hooks/react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';

const createStoreWithMiddleware = applyMiddleware(RexuxThunk)(createStore);

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root'),
);
