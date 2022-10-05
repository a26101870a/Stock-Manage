import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from 'Pages/Main';
import 'Scss/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

if (module.hot) { module.hot.accept(); }