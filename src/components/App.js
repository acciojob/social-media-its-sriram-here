import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import UserPosts from './components/UserPosts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">SocialMedia</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/notifications" className="nav-link" activeClassName="active">Notifications</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create-post" className="nav-link" activeClassName="active">Create Post</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route path="/users/:userId" component={UserPosts} />
            <Route path="/notifications" component={NotificationsPage} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/edit-post/:postId" component={EditPost} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
