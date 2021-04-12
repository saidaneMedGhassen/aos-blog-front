import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Index from './components/Posts/Index';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const user = localStorage.getItem('user_id');
  return (
    <Router>
      <Switch>
          <Route path="/login" render={
            props => {
              if (user) return <Redirect to="/" />
              return  <Auth />
            }
          } />
          <Route exact path="/" render={
            props => {
              if (!user) return <Redirect to="/login" />
              return  <Index />
            }
          } />
      </Switch>
    </Router>
  );
}

export default App;
