import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <div className='profile-pic'>
                <img src={props.image} alt="" />
            </div>
            <div className='info'>
                <span className='profile-name'>{props.name}</span>
                <span className='game-name'>{props.game}</span>
            </div>
            <div className='viewers'>
                <div className='red-ball'></div>
                <span>{props.viewers}</span>
            </div>
        </div>
    )
}

export default Profile