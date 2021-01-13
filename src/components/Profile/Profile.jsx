import react from 'react';
import MyPoats from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
    <div className='content'>
    <div>
      <img src='https://theinpaint.com/images/example-1-2.jpg' />
    </div>
    <div>
      ava + descr
    </div>
    <MyPoats />
  </div>
  )
}

export default Profile;