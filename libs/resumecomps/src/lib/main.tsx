import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import TheResume from './TheResume';
import { store } from '../../../redux-store/src/redux/app/store';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <TheResume />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
