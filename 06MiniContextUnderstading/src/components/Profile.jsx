import React, { useContext } from "react";
import UserContext from "../context/userContext/UserContext";

function Profile() {
  //data fetched from UserContext which was added in login pages setUser Method
  const { user } = useContext(UserContext);

  if (!user) return <div> please login </div>;

  return <div>Welcome : {user.username}</div>;
}

export default Profile;
