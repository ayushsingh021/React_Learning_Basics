import React from "react";
import { useParams } from "react-router-dom";

function User() {
    //helps to take parameters form url
  const { userId } = useParams();
  return (
    <div>
      <h1 className="text-3xl text-center bg-gray-600 text-white p-6">
        User : {userId}
      </h1>
    </div>
  );
}

export default User;
