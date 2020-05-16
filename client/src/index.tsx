import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import withMenu from './apiMock/decorator/decorator-header-withmenu';
import megamenu from './apiMock/decorator/decorator-megamenu';
import footer from './apiMock/decorator/decorator-footer';
import scripts from './apiMock/decorator/decorator-scripts';
import skiplinks from './apiMock/decorator/decorator-skiplinks';
import styles from './apiMock/decorator/decorator-styles';

const init = async () => {
  if (process.env.NODE_ENV === 'development') {
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_HEADING}}}', withMenu);
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_FOOTER}}}', footer);
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_STYLES}}}', styles);
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_SCRIPTS}}}', scripts);
    document.body.innerHTML = document.body.innerHTML.replace('{{{NAV_SKIPLINKS}}}', skiplinks);
    document.body.innerHTML = document.body.innerHTML.replace('{{{MEGAMENU_RESOURCES}}}', megamenu);

    // Execute client.js
    var script = document.createElement('script');
    script.src = 'https://www.nav.no/dekoratoren/client.js';
    document.body.appendChild(script);
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app'),
  );
  serviceWorker.unregister();
};
init();
