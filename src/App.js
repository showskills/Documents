import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import * as Pages from './pages'

import GigCardsList from "./Container/GigCardsList";

import{Menu,Dropdown,Logout} from './Components'

import ProfileDescription from "./pages/Profile/ProfileDescription";
import ReadMessages from "./pages/ReadMessages";
import useAuthListener from "./hooks/use-auth-listener";
import { ProtectedRoute } from "./tools/routes";
import Payment from "./payment";
import PaymentStatus from "./payment/PaymentStatus";
import ListItems from "./pages/ListItems";


import TermsOfService from "./Components/FooterComponents/TermsOfService";
import FreelancerFAQ from "./Components/FooterComponents/FreelanceFAQ";
import RecruiterFAQ from "./Components/FooterComponents/RecruiterFAQ";
import FooterAbout from "./Components/FooterComponents/FooterAbout";
import PrivacyPolicy from "./Components/FooterComponents/PrivacyPolicy";
import ContactUs from "./Components/FooterComponents/ContactUs";
import Blog from "./Components/FooterComponents/Blog";
import AllReviews from './pages/AllReviews';
const App = () => {

    const {user}=useAuthListener();
    
    return (
        <>
            <Menu />
            
            <Dropdown/ >
            <div className="hello">
            <Switch>
                <Route exact path="/" ><Pages.ShowSkills/></Route>
                <ProtectedRoute user={user} path="/home">
                 <Pages.Home/>
                </ProtectedRoute>
                <Route exact path="/payment/:id" render={(props) => <Payment {...props}/>}/>
                <Route exact path="/status/:orderId" component={PaymentStatus} />
                <Route exact path="/lists/listItems" render={(props) => <ListItems {...props}/>}/>
                <Route exact path="/startselling" component={Pages.StartSelling} />
                <Route exact path="/signup" component={Pages.Signup} />
                <Route exact path="/login" component={Pages.Login} />
                <Route exact path="/gigscardslist" render={(props) => <GigCardsList {...props}/>}/>
                <ProtectedRoute user={user} path="/profile">
                <Pages.Profile/>
                </ProtectedRoute>
                {/* <Route exact path="/ProfileDescription" component={ProfileDescription}  /> */}
                <Route exact path="/ProfileDescription/:id"  render={(props) => <ProfileDescription {...props}/>} />
                <Route exact path="/messages" component={ReadMessages} />
                <Route exact path="/projects" component={Pages.Project}/>
                <Route exact path="/startselling/overview" component={Pages.Overview} />
                <Route exact path="/startselling/overview/do" component={Pages.OverviewDo} />
                <Route exact path="/startselling/overview/dont" component={Pages.OverviewDont} />
                <Route exact path="/userReviews" component={AllReviews}/>
                <Route exact path="/termsofservice" component={TermsOfService} />
                <Route exact path="/freelancerfaq" component={FreelancerFAQ} />
                <Route exact path="/recruiterfaq" component={RecruiterFAQ} />
                <Route exact path="/footerabout" component={FooterAbout} />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/blog" component={Blog} />

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
