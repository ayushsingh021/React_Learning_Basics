import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    //hook for using route loader
    //gitInfoLoader -- (loader function) -- helps to do data call before even clicking (on hover basically) --due to which website works faster
    const data = useLoaderData();
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(`http://api.github.com/users/ayushsingh021`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="m-4 bg-blue-300 p-4 text-3xl flex justify-center items-center flex-col">
      <div className="text-white mb-4">
        Github Public Repos : {data?.public_repos}
      </div>
      <img src={data?.avatar_url} alt="Github image" width={300} />
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch('http://api.github.com/users/ayushsingh021')
  return response.json();
};
