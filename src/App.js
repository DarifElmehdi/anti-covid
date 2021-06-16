import React from 'react';

import Chatbot from "react-chatbot-kit";
import {  BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';

import Header from './components/Header';
import Covid from './components/Covid';
import Home from './components/Home';
import Footer from './components/Footer';
import Statistiques from './components/Statistiques';
import Precaution from './components/Precaution';
import Connect from './components/Connect';
import Inscrit from './components/Inscrit';
import config from './components/chatbotConfig'
import ActionProvider from './components/ActionProvider'
import MessageParser from './components/MessageParser'
import './App.css';
const App = () => {
  return (
   <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Header/><Home/>
        </Route>
        <Route path="/covid19" exact>
          <Header/><Covid/>
        </Route>
        <Route path="/statistiques" exact>
          <Header/><Statistiques/>
        </Route>
        <Route path="/precaution" exact>
          <Header/><Precaution/>
        </Route>
        <Route path="/connect" exact>
          <Connect/>
        </Route>
        <Route path="/inscrit" exact>
          <Inscrit/>
        </Route>
        <Route path="/chat" exact>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
  );
}

export default App;
