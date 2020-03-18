import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    const { user } = this.props
    return (
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr /> */}
        <Switch>
          <Route exact path="/">
            {user.loggedIn ? 'Heyo!!!!' : <Redirect />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        {/* </div> */}
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App)
