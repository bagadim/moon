import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Design from './design-page/Design';
import Settings from './features/settings/Settings';
import CreativeLibrary from './features/creative-library/CreativeLibrary';
import Navigation from './components/Navigation';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Route path="/" exact component={App}></Route>
                    <Route path="/design" exact component={Design}></Route>
                    <Route
                        path="/library"
                        exact
                        component={CreativeLibrary}
                    ></Route>
                    <Route path="/settings" exact component={Settings}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
