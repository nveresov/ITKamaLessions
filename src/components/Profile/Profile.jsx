import react from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
