import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Row from './components/Row';

import snapshot_theBausffs from './images/Live/TheBaussffs/snapshot.jpg';
import profile_theBausffs from './images/Live/TheBaussffs/profile_pic.png';
import snapshot_hasanAbi from './images/Live/HasanAbi/snapshot.jpg';
import profile_hasanAbi from './images/Live/HasanAbi/hasan_profile_pic.jpeg';
import snapshot_Fextralife from './images/Live/Fextralife/snapshot.jpg';
import profile_Fextralife from './images/Live/Fextralife/profile_pic.png';
import snapshot_Morrog from './images/Live/Morrog/snapshot.jpg';
import profile_Morrog from './images/Live/Morrog/profile_pic.png';
import snapshot_Towelliee from './images/Live/Towelliee/snapshot.jpg';
import profile_Towelliee from './images/Live/Towelliee/profile_pic.jpeg';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Sidebar />
        <div className='rows-container'>
          <h1>Live channels you might like</h1>
          <Row snapshot={snapshot_hasanAbi} viewers="33.3k" name="HasanAbi" profile_img={profile_hasanAbi} title=">H3 VS PEARLYTHING -- TRUMP ARRAIGNMENT HOGWATCH!!!! FD SIGNIFIER JOINS ME LATER!!!" game="Just Chatting" tags={["News", "Politics", "ADHD", "English"]} />
        </div>
      </main>
    </div>
  );
}

export default App;
