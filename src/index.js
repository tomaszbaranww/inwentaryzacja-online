import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/font.css';
import { Root } from 'views/Root';
import { AppProviders } from 'providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
