import react from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div className={s.deskriptinBlock}>ava + descripton</div>
    </div>
  );
};

export default ProfileInfo;
