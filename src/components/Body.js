import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-screen hide-scrollbar">
      <Sidebar />
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
