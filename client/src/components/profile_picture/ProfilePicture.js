import React from 'react'
import './ProfilePicture.css'

const ProfilePicture = () => {
  return (
    <div>
      <img className='profile-picture__image' src={require("./profile.jpg")} alt=""/>
    </div>
  )
}

export default ProfilePicture
