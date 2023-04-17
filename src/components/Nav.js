import nav_dots from '../images/nav_dots.svg'
import twitch_logo from '../images/twitch_logo.png'
import magnifying_glass from '../images/magnifying_glass.svg'

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
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <div className="bits-button">
                    <img src="" alt="" />
                    <span>Buy Bits</span>
                </div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default Nav;