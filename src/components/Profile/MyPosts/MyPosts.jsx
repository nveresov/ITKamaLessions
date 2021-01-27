import React from "react";

import react from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    //let text = newPostElement.current.value;
    //  alert(text);
    props.addPost();
    props.updateNewPostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // console.log(text);
    // alert(text);
  };

  return (
    <div className="content">
      <div>
        <h2>My posts</h2>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
