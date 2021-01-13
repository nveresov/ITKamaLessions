import react from 'react';
import s from './Post.module.css'

const Post   = () => {
    return (
      <div className={s.item}>
        <img src='https://thumbs.dfs.ivi.ru/storage30/contents/2/2/f32c21bd7a7500475c29b494cbbecf.jpg' />
          Post 1
        <div>
          <span>Like</span>
        </div>
      </div>
    )
}

export default Post;