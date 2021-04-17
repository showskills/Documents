import React from "react";
import {Route, Switch} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import * as Pages from './pages'

import GigCardsList from "./Container/GigCardsList";

import{Menu,Dropdown,Logout} from './Components'




const App = () => {
    return (
        <>
            <Menu />
            <br/><br/>
            <Dropdown/ >
            <div className="hello">
            <Switch>
                <Route exact path="/" component={Pages.ShowSkills} />
                <Route exact path="/home" component={Pages.Home} />
                <Route exact path="/startselling" component={Pages.StartSelling} />
                <Route exact path="/signup" component={Pages.Signup} />
                <Route exact path="/login" component={Pages.Login} />
                <Route exact path="/gigscardslist" component={GigCardsList} />
                <Route exact path="/startselling/overview" component={Pages.Overview} />
                <Route exact path="/startselling/overview/do" component={Pages.OverviewDo} />
                <Route exact path="/startselling/overview/dont" component={Pages.OverviewDont} />
                <Route exact path="/lists" component={Pages.Lists} />
                <Route exact path="/profile" component={Pages.Profile} />
                <Route exact path="/logout" component={Logout} />
                <Route component={Error}/>
            </Switch>
            </div>
        </>
    );
};

export default App;
