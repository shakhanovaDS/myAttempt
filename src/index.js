import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import { Provider } from "react-redux";
import App from "./app";
import { store} from "./redux/reducers";
import { PersistGate } from 'redux-persist/integration/react'


const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor}>*/}
            <App />
        {/*</PersistGate>*/}
    </Provider>,
    rootElement
);
