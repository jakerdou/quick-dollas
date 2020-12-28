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
import Expenses from './components/Expenses'

import './App.css';


function App() {
  return (
    <Router>
      <div className='app'>
        <div>
          Nav Bar{' '}
          <Link to="/">Home</Link>
        </div>
        <div>
          <Switch>
            <Route path="/about">
              <div>
                about
              </div>
            </Route>
            <Route path="/expenses">
              <div>
                <Expenses />
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
