import React from 'react';
import Profile from '../Sidebar/Profile';

import avatar_kai from '../../images/Profile/Avatars/kaikenshin.png'

const Sidebar = () => {
    return (
        <aside>
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
            <Profile image={avatar_kai} name="Kaikenshin" viewers="874" game="Dark Souls" />
        </aside>
    )
}

export default Sidebar