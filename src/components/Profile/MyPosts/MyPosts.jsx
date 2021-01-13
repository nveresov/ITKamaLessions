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
        <Post message='Hi, How are you?' />
        <Post message="It's my first post."/>
      </div>
    </div>
  </div>

}

export default MyPosts;