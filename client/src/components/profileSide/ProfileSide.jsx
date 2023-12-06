import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/profileCard'
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard location="homepage" />
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
