import react from "react";
import MyPoats from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPoats />
    </div>
  );
};

export default Profile;
