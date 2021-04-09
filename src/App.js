import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import FlDetails from './Pages/FlDetails';
import PaymenntPage from './Pages/PaymentPage';
import About from './Pages/about';
import SearchResults from './Pages/SearchResults';

import {Lists,Orders,Messages,Profile,SignIn} from './Navbar-items';


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
