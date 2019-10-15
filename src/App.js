import React from 'react';
import { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Menu/SideDrawer/SideDrawer';
import Backdrop from './components/Menu/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false

  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ height: '100%' }}>
          <div>This is page content!</div>
        </main>
      </div>
    );
  }
}

export default App;
