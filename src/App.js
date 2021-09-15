import React from 'react';


import {  BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Statistiques from './components/Statistiques'
import Precaution from './components/Precaution';
import './App.css';
import SignUp from './components/signup';
import Login from './components/login';
import Chat from './components/Chat';
import Profile from './components/Profile';
const App = () => {
  return (
   <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Header/><Home/>
        </Route>
        <Route path="/statistiques" exact>
          <Header/><Statistiques/>
        </Route>
        <Route path="/precaution" exact>
          <Header/><Precaution/>
        </Route>
        <Route path="/login" exact>
          <Header/><Login/>
        </Route>
        <Route path="/signup" exact>
          <Header/><SignUp/>
        </Route>
        <Route path="/chat" exact>
          <Chat/>
        </Route>
        <Route path="/contact" exact>
          <p>contact</p>
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
  );
}

export default App;
