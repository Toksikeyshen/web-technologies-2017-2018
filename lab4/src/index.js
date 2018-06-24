import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import User from "./components/User"
import Tabs from "./components/Tabs"
import TabPanel from "./components/TabPanel.js"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/combineReducer'
import thunk from 'redux-thunk'
import { HashRouter, Link } from 'react-router-dom'
const store = createStore(reducer, applyMiddleware(thunk));
export default store;

store.subscribe(() => {
    console.log('State: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Fragment>
            <User />
        </Fragment>
    </Provider>, document.getElementById("root"));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Tabs>
                <TabPanel><Link to='/'>Основное</Link></TabPanel>
                <TabPanel><Link to='/'>Образование</Link></TabPanel>
                <TabPanel><Link to='/'>Контакты</Link></TabPanel>
                <TabPanel><Link to='/followers'>Followers</Link></TabPanel>
                <TabPanel><Link to='/repos'>Repositories</Link></TabPanel>
                <TabPanel><Link to='/orgs'>Organizations</Link></TabPanel>
            </Tabs>
        </HashRouter>
    </Provider>, document.getElementById("tabs"));
