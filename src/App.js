import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Sidebar />
        <div className='rows-container'>
          <h1>Live channels you might like</h1>
          <Row />
        </div>
      </main>
    </div>
  );
}

export default App;
