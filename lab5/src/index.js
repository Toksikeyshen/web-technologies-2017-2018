import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import User from "./components/User"
import Tabs from "./components/Tabs"
import TabPanel from "./components/TabPanel.js"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/combineReducer'
import { HashRouter, Link, Route } from 'react-router-dom'
import mySaga from './sagas/sagas'
import createSagaMiddleware from 'redux-saga'
import SearchAllRepos from "./components/SearchAllRepos";




const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default store
sagaMiddleware.run(mySaga);

store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <Fragment>
            <HashRouter>
                <div>
                    <p>
                        <Link to="/allrepos">AllRepos</Link>
                    </p>

                    <Route path='/allrepos' component={SearchAllRepos}/>
                </div>
            </HashRouter>
            <User/>
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
                <TabPanel><Link to='/star'>TopStarRepos</Link></TabPanel>
                <TabPanel><Link to='/grown'>TopGrownRepos</Link></TabPanel>
            </Tabs>
        </HashRouter>
    </Provider>, document.getElementById("tabs"));