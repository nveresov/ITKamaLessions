import react from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className='content'>
    <div>
      <img src='https://theinpaint.com/images/example-1-2.jpg' />
    </div>
    <div>
      ava + descr
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className='posts'>
        <div className='item'>
          Post 1
        </div>
        <div className='item'>
          Post 2
        </div>
      </div>
    </div>
  </div>

}

export default Profile;