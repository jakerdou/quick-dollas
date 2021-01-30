import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Categories from './components/Categories';
import Expenses from './components/Expenses';
import Tracker from './components/Tracker';

import './App.css';


function App() {
  return (

    <Router>
      <div className='app'>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/categories">Categories</Link>{' '}
          <Link to='/expenses'>Expenses</Link>{' '}
          <Link to='/tracker'>Tracker</Link>
        </div>
        <div>
          <Switch>
            <Route path="/categories">
              <div>
                <Categories />
              </div>
            </Route>
            <Route path="/expenses">
              <div>
                <Expenses />
              </div>
            </Route>
            <Route path="/tracker">
              <div>
                <Tracker />
              </div>
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
