import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SideDrawer />
      <main style={{ height: '100%' }}>
        <div>This is page content!</div>
      </main>
    </div>
  );
}

export default App;
