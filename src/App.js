import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import * as Pages from './pages'

import GigCardsList from "./Container/GigCardsList";

import{Menu,Dropdown,Logout} from './Components'

import ProfileDescription from "./pages/Profile/ProfileDescription";
import useAuthListener from "./hooks/use-auth-listener";
import { ProtectedRoute } from "./tools/routes";


const App = () => {

    const {user}=useAuthListener();
    
    return (
        <>
            <Menu />
            <br/><br/>
            <Dropdown/ >
            <div className="hello">
            <Switch>
                <Route exact path="/" ><Pages.ShowSkills/></Route>
                <ProtectedRoute user={user} path="/home">
                 <Pages.Home/>
                </ProtectedRoute>
                <Route exact path="/startselling" component={Pages.StartSelling} />
                <Route exact path="/signup" component={Pages.Signup} />
                <Route exact path="/login" component={Pages.Login} />
                <Route exact path="/gigscardslist" render={(props) => <GigCardsList {...props}/>}/>
                <ProtectedRoute user={user} path="/profile">
                 <Pages.Profile/>
                </ProtectedRoute>
                <Route exact path="/ProfileDescription" component={ProfileDescription}  />
                <Route exact path="/startselling/overview" component={Pages.Overview} />
                <Route exact path="/startselling/overview/do" component={Pages.OverviewDo} />
                <Route exact path="/startselling/overview/dont" component={Pages.OverviewDont} />
                <ProtectedRoute user={user} path="/lists">
                 <Pages.Lists/>
                </ProtectedRoute>
                <Route exact path="/logout" component={Logout} />
                <Route component={Error}/>
            </Switch>
            </div>
        </>
    );
};

export default App;
