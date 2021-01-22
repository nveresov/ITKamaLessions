import react from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className="content">
      <div>
        <h2>My posts</h2>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
