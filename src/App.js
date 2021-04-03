import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './Navbar-items/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlDetails from './FlDetails';
import PaymenntPage from './PaymentPage';
import About from './about';
import './index.css'
import Profile from './Navbar-items/Profile';
import Lists from './Navbar-items/Lists';
import Orders from './Navbar-items/orders';
import Messages from './Navbar-items/Messages';
import SearchResults from './SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signIn'>
          <SignIn/>
        </Route>
        <Route  exact path='/flDetails'>
          <FlDetails/>
        </Route>
        <Route path='/flDetails/paymentPage'>
          <PaymenntPage/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/lists'>
          <Lists/>
        </Route>
        <Route path='/orders'>
          <Orders/>
        </Route>
        <Route path='/messages'>
          <Messages></Messages>
        </Route>
        <Route path='/searchResults'>
          <SearchResults/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
