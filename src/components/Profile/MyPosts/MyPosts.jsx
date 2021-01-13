import react from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div className='content'>
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className='posts'>
        <Post message='Hi, How are you?' likesCount='0' />
        <Post message="It's my first post." likesCount='23' />
      </div>
    </div>
  </div>

}

export default MyPosts;