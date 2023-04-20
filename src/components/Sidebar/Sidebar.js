import React from 'react';
import Profile from '../Sidebar/Profile';

import avatar_kai from '../../images/Profile/Avatars/kaikenshin.png'
import avatar_asmon from '../../images/Profile/Avatars/asmongold.png'
import avatar_boaty from '../../images/Profile/Avatars/boaty.png'

const Sidebar = () => {
    return (
        <aside>
            <Profile image={avatar_asmon} name="Asmongold" viewers="30.6k" game="World of Warcraft" />
            <Profile image={avatar_boaty} name="B0aty" viewers="2.6k" game="Old School RuneScape" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
        </aside>
    )
}

export default Sidebar