import React from 'react'
import { CgProfile } from "react-icons/cg";
const Avator = ({profilePic}) => {
  return (
    <div>
      <div className="avatar avatar-online">
        <div className="w-11 rounded-full">
          <img alt={<CgProfile/>} src={profilePic} />
        </div>
      </div>
    </div>
  );
}

export default Avator
