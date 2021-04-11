import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Index from './components/Posts/Index';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
