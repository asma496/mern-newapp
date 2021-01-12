import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Add from './pages/Add';
  import User from './pages/User';
  function Main() {
    return (
  <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/user">Users</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
  
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/">
            <User />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Main;