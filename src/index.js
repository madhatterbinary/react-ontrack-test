import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Web Fonts for icons
import WebFontLoader from 'webfontloader';

// App
import App from 'App';
import { ConnectedRouter } from 'connected-react-router';
// Redux
import { Provider } from 'react-redux';
import configureStore, { history } from 'js/configureStore';
import rootReducer from 'js/store/reducers';
import PageNotFound from 'js/components/PageNotFound.jsx';


// CSS import
import 'scss/index.scss';


WebFontLoader.load({
  google: {
    families: ['Material Icons', 'Comic Sans MS'],
  },
  custom: {
    families: ['FontAwesome'],
    urls: ['https://use.fontawesome.com/releases/v5.0.4/css/all.css'],
  },
});

// Creating store + apply middleware
const store = configureStore(rootReducer, history);

// Render it to DOM
const rootEl = document.getElementById('root');
//
ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route path='/' component={ App } />
        <Route exact path='/:index' component={ App } />
        <Route exact path='/:index/:filters' component={ App } />
        <Route component={ PageNotFound } />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  rootEl
);
