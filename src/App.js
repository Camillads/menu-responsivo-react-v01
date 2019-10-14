import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{marginTop: '5%'}}>
        <div>This is page content!</div>
      </main>
    </div>
  );
}

export default App;
