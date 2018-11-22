import React, { Component } from 'react';
import './App.css';
import { getActiveLocales } from './locales';

const AppContext = React.createContext();

class LocalesProvider extends Component {
  state = {
    activeLangFlag: 'en',
    changeActiveLangFlag: (flag) => {
      console.log(this)
      this.setState({activeLangFlag: flag})
    },
    locales: getActiveLocales,
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
          <ChildrenComponent />
        </div>
      </LocalesProvider>
    );
  }
}

class ChildrenComponent extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          console.log(context.locales(context.activeLangFlag).home)
          return (
            <div>
              <button onClick={() => context.changeActiveLangFlag('ru')}>
                RU
              </button>
              <button onClick={() => context.changeActiveLangFlag('en')}>
                EN
              </button>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default App;
