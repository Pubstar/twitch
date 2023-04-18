import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Sidebar />
        <div>
          <h1>This is supposed to look like twitch soon</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
