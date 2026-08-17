import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSocketContext } from "../../context/SocketContext";
const Avator = ({ user }) => {
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(user._id);
  const fallbackProfile =
    user.gender === "male"
      ? "/maleProfile.png"
      : user.gender === "female"
        ? "/femaleProfile.png"
        : "/profile.png";
  return (
    <div>
      <div className={`avatar ${isOnline ? "avatar-online":""}`}>
        <div className="w-11 rounded-full">
          <img
            alt="profile"
            src={user.profilePic || fallbackProfile}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackProfile;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Avator;

