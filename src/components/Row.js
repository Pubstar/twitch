import React from 'react';

import snapshot_theBausffs from '../images/Live/TheBaussffs/snapshot.jpg';
import profile_theBausffs from '../images/Live/TheBaussffs/profile_pic.png';
import snapshot_hasanAbi from '../images/Live/HasanAbi/snapshot.jpg';
import profile_hasanAbi from '../images/Live/HasanAbi/hasan_profile_pic.jpeg';
import snapshot_Fextralife from '../images/Live/Fextralife/snapshot.jpg';
import profile_Fextralife from '../images/Live/Fextralife/profile_pic.png';
import snapshot_Morrog from '../images/Live/Morrog/snapshot.jpg';
import profile_Morrog from '../images/Live/Morrog/profile_pic.png';
import snapshot_Towelliee from '../images/Live/Towelliee/snapshot.jpg';
import profile_Towelliee from '../images/Live/Towelliee/profile_pic.jpeg';

const row = (props) => {
    return (
        <div className='row'>
            <div className="channel">
                <div className='snapshot-img'>
                    <img src={snapshot_hasanAbi} alt="" />
                    <div className='snapshot-overlay'>
                        <div className="live-icon">LIVE</div>
                        <div className="viewers">33.3k viewers</div>
                    </div>
                </div>
                <div className='profile-info'>
                    <img src={profile_hasanAbi} alt="" className="profile-pic" />
                    <div className='stream-info'>
                        <span className="title">H3 VS PEARLYTHING -- TRUMP ARRAIGNMENT HOGWATCH!!!! FD SIGNIFIER JOINS ME LATER!!!</span>
                        <span className="profile-name">HasanAbi</span>
                        <span className="game">Just Chatting</span>
                        <div className="tags">
                            <span className="tag">News</span>
                            <span className="tag">Politics</span>
                            <span className="tag">ADHD</span>
                            <span className="tag">English</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel">
                <div className='snapshot-img'>
                    <img src={snapshot_Fextralife} alt="" />
                    <div className='snapshot-overlay'>
                        <div className="live-icon">LIVE</div>
                        <div className="viewers">42.1k viewers</div>
                    </div>
                </div>
                <div className='profile-info'>
                    <img src={profile_Fextralife} alt="" className="profile-pic" />
                    <div className='stream-info'>
                        <span className="title">!MOUNT 🔴NEW !DROPS🔴 ~ NECROMANCER WITH CAS</span>
                        <span className="profile-name">Fextralife</span>
                        <span className="game">Diablo IV</span>
                        <div className="tags">
                            <span className="tag">English</span>
                            <span className="tag">DropsEnabled</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel">
                <div className='snapshot-img'>
                    <img src={snapshot_Morrog} alt="" />
                    <div className='snapshot-overlay'>
                        <div className="live-icon">LIVE</div>
                        <div className="viewers">856 viewers</div>
                    </div>
                </div>
                <div className='profile-info'>
                    <img src={profile_Morrog} alt="" className="profile-pic" />
                    <div className='stream-info'>
                        <span className="title">De verschrikkelijkste hobby ooit bekijken</span>
                        <span className="profile-name">Morrog</span>
                        <span className="game">Just Chatting</span>
                        <div className="tags">
                            <span className="tag">Nederlands</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel">
                <div className='snapshot-img'>
                    <img src={snapshot_theBausffs} alt="" />
                    <div className='snapshot-overlay'>
                        <div className="live-icon">LIVE</div>
                        <div className="viewers">17.1k viewers</div>
                    </div>
                </div>
                <div className='profile-info'>
                    <img src={profile_theBausffs} alt="" className="profile-pic" />
                    <div className='stream-info'>
                        <span className="title">Late night cozyness</span>
                        <span className="profile-name">Thebausffs</span>
                        <span className="game">League of Legends</span>
                        <div className="tags">
                            <span className="tag">English</span>
                            <span className="tag">Talkative</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="channel">
                <div className='snapshot-img'>
                    <img src={snapshot_Towelliee} alt="" />
                    <div className='snapshot-overlay'>
                        <div className="live-icon">LIVE</div>
                        <div className="viewers">3.4k viewers</div>
                    </div>
                </div>
                <div className='profile-info'>
                    <img src={profile_Towelliee} alt="" className="profile-pic" />
                    <div className='stream-info'>
                        <span className="title">⚔️NEW !DROPS SOCERER🎁2 GIFTED SUBS = D4 MOUNT🎁SUBATHON DAY 11⚔️!4080 !4090 GIVEAWAY⚔️!CORSAIR !ADV !GLASSES !ORIGIN⚔️</span>
                        <span className="profile-name">Towelliee</span>
                        <span className="game">Diablo IV</span>
                        <div className="tags">
                            <span className="tag">MMORPG</span>
                            <span className="tag">Cuban</span>
                            <span className="tag">Tank</span>
                            <span className="tag">Boomer</span>
                            <span className="tag">English</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default row