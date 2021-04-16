import React from "react";
import {Route, Switch} from "react-router-dom";
import ShowSkills from "../src/pages_folder/ShowSkills";
import StartSelling from "../src/pages_folder/StartSelling";
import Error from "../src/pages_folder/Error";
import Menu from "../src/Components/Menu/Menu";
import MainSignup from "../src/pages_folder/SignupForm/MainSignup";
import Login from "../src/pages_folder/LoginForm/Login";
import MainPhotoshops from "./MainPhotoshops";
import Dropdown from "../src/Components/Dropdown";
import Overview from "../src/pages_folder/StartSelling/Overview";
import Overview_do from "../src/pages_folder/StartSelling/Overview_do";
import Overview_dont from "../src/pages_folder/StartSelling/Overview_dont";
import ArchitectureInteriorDesign from "./ArchitectureInteriorDesign";
import BusinessCardsStationery from "./BusinessCardsStationery";
import Lists from "../src/pages_folder/Lists";

const App = () => {
    return (
        <>
            <Menu />
            <br/><br/>
            <Dropdown/ >
            <div className="hello">
            <Switch>
                <Route exact path="/" component={ShowSkills} />
                <Route exact path="/startselling" component={StartSelling} />
                <Route exact path="/signup" component={MainSignup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mainphotoshops" component={MainPhotoshops} />
                <Route exact path="/startselling/overview" component={Overview} />
                <Route exact path="/startselling/overview/do" component={Overview_do} />
                <Route exact path="/startselling/overview/dont" component={Overview_dont} />
                <Route exact path="/architecture" component={ArchitectureInteriorDesign} />
                <Route exact path="/businesscards" component={BusinessCardsStationery} />
                <Route exact path="/lists" component={Lists} />
                <Route component={Error}/>
            </Switch>
            </div>
        </>
    );
};

export default App;
