import nav_dots from '../images/nav/nav_dots.svg'
import twitch_logo from '../images/nav/twitch_logo.png'
import magnifying_glass from '../images/nav/magnifying_glass.svg'
import crown from '../images/nav/nav_crown.svg'
import notifications from '../images/nav/nav_notifications.svg'
import messages from '../images/nav/nav_messages.svg'
import coin from '../images/nav/nav_coin.svg'
import profile from '../images/nav/nav_profile.png'

function Nav() {
    return (
        <div className="nav">
            <div className='left'>
                <img src={twitch_logo} alt="twitch-logo" width={32} height={35} />
                <span>Following</span>
                <span>Browse</span>
                <img src={nav_dots} alt="More options" />
            </div>
            <div className='middle'>
                <input type="text" />
                <img src={magnifying_glass} alt="" />
            </div>
            <div className='right'>
                <img src={magnifying_glass} alt="" className='search-button' />
                <img src={crown} alt="" />
                <img src={notifications} alt="" />
                <img src={messages} alt="" />
                <div className="bits-button">
                    <img src={coin} alt="" />
                    <span>Buy Bits</span>
                </div>
                <img src={profile} alt="" className='profile-picture' />
            </div>
        </div>
    );
}

export default Nav;