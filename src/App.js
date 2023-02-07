import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" exact component={Home}/>
            <Route path="/movie/:imdbID" exact component={MovieDetails}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
