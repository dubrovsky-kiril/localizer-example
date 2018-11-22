import React, { Component } from 'react';
import { getActiveLocales } from './locales';
import { A } from './components/A/A.jsx';
import './App.css';

export const AppContext = React.createContext();

class LocalesProvider extends Component {
  state = {
    locales: getActiveLocales(),
    changeLocales: (langFlag) => () => this.setState({ locales: getActiveLocales(langFlag) }),
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <LocalesProvider>
        <div className="App">
          <A />
        </div>
      </LocalesProvider>
    );
  }
}
export default App;
