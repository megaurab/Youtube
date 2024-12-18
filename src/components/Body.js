import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex justify-center items-center ">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
