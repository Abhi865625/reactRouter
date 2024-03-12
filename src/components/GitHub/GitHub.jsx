import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Abhi865625")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div
      className="text-center mt-5 bg-gray-200 text-white p-4 text-4xl"
      style={{
        background: "linear-gradient(to right, #4FACFE, #00F2FE)",
      }}
    >
      <div className="text-3xl sm:text-5xl text-blue-900">
        GitHub followers: {data.followers}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <img
          className="w-48 sm:w-64 m-5"
          src={data.avatar_url}
          alt="git picture"
        />
        <div>
          <h1 className="p-4 m-2 sm:m-5 w-full sm:w-96 text-black">
            {data.bio}
          </h1>
        </div>
      </div>
      <div>
        <h1 className="p-4 m-2 text-blue-900 text-3xl sm:text-5xl">
          {data.name}
        </h1>
      </div>
    </div>
  );
};

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Abhi865625");
  return response.json();
};
