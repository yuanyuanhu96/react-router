import Navigator from './components/Navigator';
import Projects from './pages/Projects';
import About from './pages/About';
import React from 'react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="App">
        <Navigator />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Redirect to="/about" />
        </Switch>
        <input onClick={this.handleGoBack} type="button" value="Go back" />
      </div>
    );
  }
}

export default withRouter(App);
