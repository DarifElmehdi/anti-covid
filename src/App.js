import logo from './logo.svg';
import React ,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import Header from './components/Header';
import Statistiques from './components/Statistiques';
import Precaution from './components/Precaution';
import Covid from './components/Covid';
import { BrowserRouter as Router,Route, Switch,Link} from "react-router-dom";
import { useRoutes} from 'hookrouter';
import Footer from './components/Footer';


class App extends Component  {
  render() {
    return (
      <Router>
          <div className="App">
          <Header/>
            <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/statistiques">
                <Statistiques/>
              </Route>
              <Route exact path="/covid19">
                <Covid/>
              </Route>
              <Route exact path="/precaution">
                <Precaution/>
              </Route>
            </Switch>
            <Footer/>
            </div>
          </div>
      </Router>
    )
  }
}

export default App;
