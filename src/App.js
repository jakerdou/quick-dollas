import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleLogin from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Categories from './components/Categories';
import Expenses from './components/Expenses';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userID, setUserID] = useState();
  const [name, setName] = useState();

  const onSignIn = googleUser => {
    console.log('in function');
    console.log('user', googleUser);
    var profile = googleUser.getBasicProfile();

    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('res ', googleUser.getAuthResponse());
    console.log('token', googleUser.getAuthResponse().id_token);

    setIsLoggedIn(true)
    setUserID(profile.getId());
    setName(profile.getName());
  }

  console.log('id in app', userID);

  return (
    <Router>
      <div className='app'>
        <GoogleLogin
          clientId="180544136485-bildtjala9v81f48f6uq90epp6l7dhnt.apps.googleusercontent.com"
          buttonText={isLoggedIn ? name + " is signed in" : "Login with Google"}
          onSuccess={onSignIn}
          onFailure={error => console.log('error with google stuff', error)}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        >
        </GoogleLogin>
        <div>{name ? null : 'Please sign in to use the app'}</div>
        {
          isLoggedIn
          ? (
            <>
              <div>
                <Link to="/">Home</Link>{' '}
                <Link to="/categories">Categories</Link>{' '}
                <Link to='/expenses'>Expenses</Link>{' '}
              </div>
              <div>
                <Switch>
                  <Route path="/categories">
                    <div>
                      <Categories userID={userID}/>
                    </div>
                  </Route>
                  <Route path="/expenses">
                    <div>
                      <Expenses userID={userID}/>
                    </div>
                  </Route>
                  <Route path="/">
                      <Home userID={userID}/>
                  </Route>
                </Switch>
              </div>
            </>
          )
          : null
        }
        
      </div>
    </Router>
    
  );
}

export default App;
