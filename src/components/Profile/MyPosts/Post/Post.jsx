import react from 'react';
import s from './Post.module.css'

const Post   = (props) => {
  console.log('props.message = ' , props.message);
    return (
      <div className={s.item}>
        <img src='https://thumbs.dfs.ivi.ru/storage30/contents/2/2/f32c21bd7a7500475c29b494cbbecf.jpg' />
          {props.message}
        <div>
          <span >Like</span> 
          { props.likesCount }
        </div>
      </div>
    )
}

function like() {
  alert('Клик!');
  console.log('Click!!');
}

export default Post;