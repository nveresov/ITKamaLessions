import react from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post.", likesCount: 11 },
    { id: 3, message: "Bla", likesCount: 11 },
    { id: 4, message: "blaaaa", likesCount: 11 },
  ];

  let postElements = posts.map((p) => (
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
