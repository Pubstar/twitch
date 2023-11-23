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
          <Row snapshot={snapshot_Fextralife} viewers="42.1k" name="" profile_img={profile_Fextralife} title="!MOUNT 🔴NEW !DROPS🔴 ~ NECROMANCER WITH CAS" game="Diablo IV" tags={["DropsEnabled", "English"]} />
          <Row snapshot={snapshot_hasanAbi} viewers="33.3k" name="HasanAbi" profile_img={profile_hasanAbi} title=">H3 VS PEARLYTHING -- TRUMP ARRAIGNMENT HOGWATCH!!!! FD SIGNIFIER JOINS ME LATER!!!" game="Just Chatting" tags={["News", "Politics", "ADHD", "English"]} />
          <Row snapshot={snapshot_theBausffs} viewers="9.2k" name="theBausFfs" profile_img={profile_theBausffs} title="Late night cozyness" game="League of Legends" tags={["Talkative", "English"]} />
          <Row snapshot={snapshot_Towelliee} viewers="3.4k" name="Towelliee" profile_img={profile_Towelliee} title="⚔️NEW !DROPS SOCERER🎁2 GIFTED SUBS = D4 MOUNT🎁SUBATHON DAY 11⚔️!4080 !4090 GIVEAWAY⚔️!CORSAIR !ADV !GLASSES !ORIGIN⚔️" game="Diablo IV" tags={["MMORPG", "Tank", "Cuban", "Boomer"]} />
          <Row snapshot={snapshot_Morrog} viewers="856" name="Morrog" profile_img={profile_Morrog} title="De verschrikkelijkste hobby ooit bekijken" game="Just Chatting" tags={["Nederlands"]} />
        </div>
      </main>
    </div>
  );
}

export default App;
