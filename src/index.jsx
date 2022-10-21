import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from 'Pages/Main';
import 'Scss/main';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Main />
    </Provider>);

if (module.hot) { module.hot.accept(); }